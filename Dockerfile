# Используем официальный образ PHP 8.4 с FPM на базе легковесного Alpine Linux
FROM php:8.4-fpm-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /var/www/html

# Устанавливаем системные зависимости, необходимые для расширений PHP
RUN apk update && apk add --no-cache \
    libzip-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libpng-dev \
    libavif-dev \
    freetype-dev \
    icu-dev \
    oniguruma-dev \
    libxml2-dev \
    && rm -rf /var/cache/apk/*

# Устанавливаем расширения PHP, необходимые для October CMS
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp --with-avif \
    && docker-php-ext-install \
    pdo_mysql \
    zip \
    gd \
    intl \
    opcache \
    bcmath \
    exif \
    mbstring \
    xml

# Устанавливаем Composer (менеджер зависимостей для PHP)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Копируем и настраиваем entrypoint скрипт
COPY ./docker/app/entrypoint.sh /usr/local/bin/kv-vopros-entrypoint
RUN chmod +x /usr/local/bin/kv-vopros-entrypoint

# Копируем кастомные настройки PHP
COPY ./php/php.ini /usr/local/etc/php/conf.d/custom.ini

ENTRYPOINT ["kv-vopros-entrypoint"]

# Открываем порт, который слушает PHP-FPM
EXPOSE 9000