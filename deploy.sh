#!/usr/bin/env bash

# ----------------------------------------------------------------
# Скрипт деплоя для проекта kv-tyumen (October CMS в Docker)
#
# Что делает:
# 1) Коммит + push локальных изменений.
# 2) На сервере: обновляет репозиторий, поднимает контейнеры, собирает ассеты,
#    обновляет зависимости и выполняет October-миграции (october:up).
#
# ВАЖНО:
# - Данные из админки хранятся в БД (volume) и не должны теряться при рестарте.
# - Потеря данных обычно происходит ТОЛЬКО если удалили volume (например `docker compose down -v`)
#   или если volume был сгенерирован с другим именем (из-за смены compose project name/пути).
# - На сервере обычно есть свой `.env` (домен/пароли). Этот скрипт сохраняет
#   существующий `.env` при `git reset --hard`, чтобы он не затирался.
#
# Использование:
#   ./deploy.sh
# ----------------------------------------------------------------

# --- НАСТРОЙКИ (ПОМЕНЯЙТЕ ПОД СЕБЯ) ---
# Пользователь и адрес вашего сервера
REMOTE_USER="root"
REMOTE_HOST="31.130.135.132"

# Путь к папке с проектом НА СЕРВЕРЕ (там где лежит docker-compose.yml)
REMOTE_PATH="/var/www/kv-tyumen"

# Ветка для деплоя
GIT_BRANCH="main"

# --- КОД СКРИПТА ---

# Выходим, если любая команда завершилась с ошибкой
set -euo pipefail

# 1. Запрашиваем у пользователя сообщение для коммита
read -r -p "Введите сообщение для коммита: " COMMIT_MESSAGE

# Проверяем, что сообщение не пустое
if [ -z "$COMMIT_MESSAGE" ]; then
  echo
  echo "Ошибка: Сообщение для коммита не может быть пустым."
  exit 1
fi

# 2. Добавляем и отправляем изменения на GitHub
echo "--- 1/2: Отправка изменений на GitHub ---"
git add -A
git commit -m "$COMMIT_MESSAGE"
git push origin "$GIT_BRANCH"

echo "OK: Код успешно отправлен на GitHub."

# 3. Подключаемся к серверу и скачиваем обновления
echo "--- 2/2: Деплой на сервер ---"

ssh "${REMOTE_USER}@${REMOTE_HOST}" "REMOTE_PATH='${REMOTE_PATH}' GIT_BRANCH='${GIT_BRANCH}' bash -se" <<'EOF'
set -euo pipefail

cd "${REMOTE_PATH}"

echo '--- 0. Бэкап базы данных (пользователи/права/контент) ---'
# Храним дампы на сервере в папке backups рядом с проектом.
# Восстановление на другом сервере:
#   scp root@server:${REMOTE_PATH}/backups/db_YYYYmmdd_HHMMSS.sql.gz ./
#   gunzip -c db_*.sql.gz | docker compose exec -T db mariadb -u"\$MYSQL_USER" -p"\$MYSQL_PASSWORD" "\$MYSQL_DATABASE"
mkdir -p backups
TS=\$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backups/db_\${TS}.sql"
if command -v gzip >/dev/null 2>&1; then
  BACKUP_FILE="\${BACKUP_FILE}.gz"
  docker compose exec -T db sh -lc 'mariadb-dump -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' | gzip -9 > "\${BACKUP_FILE}"
else
  docker compose exec -T db sh -lc 'mariadb-dump -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' > "\${BACKUP_FILE}"
fi
echo "OK: Бэкап создан: \${BACKUP_FILE}"

echo '--- 0.1 Ротация бэкапов (оставляем последние 7) ---'
# Удаляем всё, кроме 7 самых новых файлов db_*.sql / db_*.sql.gz
ls -1t backups/db_*.sql* 2>/dev/null | tail -n +8 | xargs -r rm -f || true

echo '--- 1. Обновление кода (с сохранением серверного .env) ---'
if [ -f .env ]; then
  cp .env .env.deploy.backup
fi
git fetch origin "${GIT_BRANCH}"
git reset --hard "origin/${GIT_BRANCH}"
if [ -f .env.deploy.backup ]; then
  mv .env.deploy.backup .env
fi

echo '--- 1.1 Подготовка acme.json для Traefik ---'
touch traefik/acme.json
chmod 600 traefik/acme.json

echo '--- 2. Поднимаем/обновляем контейнеры (без удаления volumes) ---'
docker compose up -d --build

echo '--- 3. Права на запись для October (storage, cache) ---'
docker compose exec -T app sh -lc 'mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache'

echo '--- 4. Node.js/npm (если нужно) + сборка фронтенда ---'
docker compose exec -T app sh -lc 'command -v npm >/dev/null 2>&1 || apk add --no-cache nodejs npm'
docker compose exec -T --user www-data app sh -lc 'cd /var/www/html && if [ -f package.json ]; then if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi; npm run prod; else echo "Skip: package.json not found"; fi'

echo '--- 5. Composer install ---'
docker compose exec -T --user www-data app sh -lc 'cd /var/www/html && if [ -f composer.json ]; then composer install --no-interaction --no-dev --prefer-dist --optimize-autoloader; else echo "Skip: composer.json not found"; fi'

echo '--- 6. Artisan (storage link, migrations, cache clear) ---'
docker compose exec -T --user www-data app sh -lc 'cd /var/www/html && php artisan storage:link --force || true'
docker compose exec -T --user www-data app sh -lc 'cd /var/www/html && php artisan october:up'
docker compose exec -T --user www-data app sh -lc 'cd /var/www/html && php artisan route:clear && php artisan view:clear && php artisan config:clear && php artisan cache:clear'

echo 'OK: Деплой завершен.'
EOF

echo
echo "Деплой успешно завершен."
echo
echo "ВАЖНО: Скрипт делает docker compose up -d --build и НЕ удаляет volumes."
echo "Если хотите сохранить данные БД — не используйте на сервере: docker compose down -v"
echo
