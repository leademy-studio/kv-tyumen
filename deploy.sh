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
# - На сервере обычно есть свой `.env` (домен/пароли). Этот скрипт сохраняет
#   существующий `.env` при `git reset --hard`, чтобы он не затирался.
#
# Использование:
#   ./deploy.sh
# ----------------------------------------------------------------

# --- НАСТРОЙКИ (ПОМЕНЯЙТЕ ПОД СЕБЯ) ---
# Пользователь и адрес вашего сервера
REMOTE_USER="root"
REMOTE_HOST="your.server.ip.or.domain"

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

ssh "${REMOTE_USER}@${REMOTE_HOST}" bash -se <<EOF
set -euo pipefail

cd "${REMOTE_PATH}"

echo '--- 1. Обновление кода (с сохранением серверного .env) ---'
if [ -f .env ]; then
  cp .env .env.deploy.backup
fi
git fetch origin "${GIT_BRANCH}"
git reset --hard "origin/${GIT_BRANCH}"
if [ -f .env.deploy.backup ]; then
  mv .env.deploy.backup .env
fi

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
