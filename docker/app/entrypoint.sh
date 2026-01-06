#!/bin/sh
set -e

# 1. Ожидание готовности базы данных
echo "Waiting for database..."
while ! nc -z db 3306; do
  sleep 1
done
echo "Database is up!"

# 2. Создание и установка прав доступа для директорий, в которые пишет October CMS
echo "Creating and setting permissions for storage and bootstrap/cache..."
mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# 3. Установка зависимостей Composer, если есть composer.json, но нет папки vendor
if [ -f "/var/www/html/composer.json" ] && [ ! -d "/var/www/html/vendor" ]; then
    echo "composer.json found, installing dependencies..."
    composer install --no-interaction --no-progress --prefer-dist
else
    echo "Skipping composer install: composer.json not found or vendor directory already exists."
fi

# Опционально: можно раскомментировать для автоматического запуска миграций при старте
# php artisan migrate --force

# 4. Запуск основного процесса контейнера (php-fpm)
if [ "$#" -eq 0 ]; then
  set -- php-fpm
fi

exec "$@"