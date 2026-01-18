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
# - Потеря данных обычно происходит ТОЛЬКО если удалили volume (например `docker compose down -v`).
# - На сервере обычно есть свой `.env` (домен/пароли). Этот скрипт сохраняет
#   существующий `.env` при `git reset --hard`, чтобы он не затирался.
#
# Использование:
#   ./deploy.sh
# ----------------------------------------------------------------

# --- НАСТРОЙКИ ---
# Пользователь и адрес вашего сервера
REMOTE_USER="root"
REMOTE_HOST="31.130.135.132"

# Путь к папке с проектом НА СЕРВЕРЕ (там где лежит docker-compose.yml)
REMOTE_PATH="/var/www/kv-tyumen"

# Ветка для деплоя
GIT_BRANCH="main"
# Репозиторий для клонирования на сервере
GIT_REPO="https://github.com/leademy-studio/kv-tyumen/"

# --- КОД СКРИПТА ---

# Выходим, если любая команда завершилась с ошибкой
set -e

# 1. Добавляем и отправляем изменения на GitHub
echo "--- 1/2: Отправка изменений на GitHub ---"
git add -A
git fetch -q origin "$GIT_BRANCH"

if git diff --cached --quiet; then
  AHEAD_COUNT=$(git rev-list --count "origin/${GIT_BRANCH}..${GIT_BRANCH}")
  if [ "$AHEAD_COUNT" -gt 0 ]; then
    echo "Нет новых локальных изменений, но есть ${AHEAD_COUNT} незапушенных коммит(ов). Пушим..."
    git push origin "$GIT_BRANCH"
    echo "OK: Коммиты отправлены на GitHub."
  else
    echo "Нет локальных изменений и незапушенных коммитов. Пропускаем commit/push."
  fi
else
  # Запрашиваем у пользователя сообщение для коммита
  read -r -p "Введите сообщение для коммита: " COMMIT_MESSAGE

  # Проверяем, что сообщение не пустое
  if [ -z "$COMMIT_MESSAGE" ]; then
    echo
    echo "Ошибка: Сообщение для коммита не может быть пустым."
    exit 1
  fi

  git commit -m "$COMMIT_MESSAGE"
  git push origin "$GIT_BRANCH"
  echo "OK: Код успешно отправлен на GitHub."
fi

# 3. Подключаемся к серверу и скачиваем обновления
echo "--- 2/2: Деплой на сервер ---"

ssh "${REMOTE_USER}@${REMOTE_HOST}" "REMOTE_PATH='${REMOTE_PATH}' GIT_BRANCH='${GIT_BRANCH}' GIT_REPO='${GIT_REPO}' bash -se" <<'EOF'
set -euo pipefail

ensure_repo() {
  if [ -d "${REMOTE_PATH}/.git" ]; then
    cd "${REMOTE_PATH}"
    echo '--- 1. Обновление кода (с сохранением серверного .env) ---'
    if [ -f .env ]; then cp .env .env.deploy.backup; fi
    git fetch origin "${GIT_BRANCH}"
    git reset --hard "origin/${GIT_BRANCH}"
    if [ -f .env.deploy.backup ]; then mv .env.deploy.backup .env; fi
    return
  fi

  if [ -d "${REMOTE_PATH}" ]; then
    shopt -s nullglob dotglob
    extra_entries=""
    for entry in "${REMOTE_PATH}"/*; do
      base="$(basename "${entry}")"
      case "${base}" in
        .|..|backups|.env) continue ;;
      esac
      if [ -e "${entry}" ]; then extra_entries="${extra_entries} ${base}"; fi
    done
    shopt -u nullglob dotglob

    if [ -n "${extra_entries}" ]; then
      echo "ERROR: ${REMOTE_PATH} существует и не является git-репозиторием."
      echo "Лишние файлы/папки:${extra_entries}"
      echo "Очистите папку или укажите другой путь для деплоя."
      exit 1
    fi
  fi

  echo '--- 1. Клонирование репозитория ---'
  tmp_dir="$(mktemp -d)"
  if [ -d "${REMOTE_PATH}/backups" ]; then mv "${REMOTE_PATH}/backups" "${tmp_dir}/"; fi
  if [ -f "${REMOTE_PATH}/.env" ]; then mv "${REMOTE_PATH}/.env" "${tmp_dir}/"; fi
  rmdir "${REMOTE_PATH}" 2>/dev/null || true
  mkdir -p "${REMOTE_PATH}"
  git clone --branch "${GIT_BRANCH}" "${GIT_REPO}" "${REMOTE_PATH}"
  if [ -d "${tmp_dir}/backups" ]; then mv "${tmp_dir}/backups" "${REMOTE_PATH}/"; fi
  if [ -f "${tmp_dir}/.env" ]; then mv "${tmp_dir}/.env" "${REMOTE_PATH}/"; fi
  rmdir "${tmp_dir}" 2>/dev/null || true
  cd "${REMOTE_PATH}"
}

ensure_repo

echo '--- 1.1 Подготовка acme.json для Traefik ---'
mkdir -p traefik
touch traefik/acme.json
chmod 600 traefik/acme.json

echo '--- 2. Проверка Docker ---'
if ! command -v docker >/dev/null 2>&1; then
  echo 'ERROR: docker не установлен на сервере.'
  exit 1
fi

echo '--- 2.1 Docker Hub login (если заданы DOCKERHUB_USER/DOCKERHUB_TOKEN) ---'
if [ -f .env ]; then set -a; . ./.env; set +a; fi
if [ -n "${DOCKERHUB_USER:-}" ] && [ -n "${DOCKERHUB_TOKEN:-}" ]; then
  echo "${DOCKERHUB_TOKEN}" | docker login -u "${DOCKERHUB_USER}" --password-stdin
fi

echo '--- 3. Поднимаем/обновляем контейнеры (без удаления volumes) ---'
docker compose up -d --build

echo '--- 4. Права на запись для October (storage, cache) ---'
docker compose exec -T app sh -lc 'mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache'

echo '--- 5. Node.js/npm (если нужно) + сборка фронтенда ---'
docker compose exec -T app sh -lc 'command -v npm >/dev/null 2>&1 || apk add --no-cache nodejs npm'
docker compose exec -T --user www-data app sh -lc 'cd /var/www/html && if [ -f package.json ]; then if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi; npm run prod; else echo Skip: package.json not found; fi'

echo '--- 6. Composer install ---'
docker compose exec -T --user www-data app sh -lc 'cd /var/www/html && if [ -f composer.json ]; then composer install --no-interaction --no-dev --prefer-dist --optimize-autoloader; else echo Skip: composer.json not found; fi'

echo '--- 7. Artisan (storage link, migrations, cache clear) ---'
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
