# Инструкция по проекту kv-vopros

## Краткое описание

Проект `kv-tyumen` (рабочее имя `kv-vopros`) — сайт на базе October CMS. Исходный код приложения находится в папке `october/`. Проект содержит конфигурации для запуска через Docker (Traefik, Nginx, PHP-FPM, MariaDB) и все необходимые зависимости для разработки и продакшена.

Основная динамика сайта построена на Tailor: портфолио кейсов, услуги и контент главной страницы хранятся как Tailor-записи и выводятся через тему `kv-vopros`.

---

## Зависимости (основные)

- **PHP**: требуется PHP >= 8.2 (см. `october/composer.json`).
- **Composer**: для установки PHP-зависимостей.
- **Node.js & npm/yarn**: для сборки фронтенд-ассетов (см. `october/package.json`).
- **Docker & docker-compose**: рекомендовано для локальной разработки.

---

## Архитектура проекта

### Структура директорий

```
kv-tyumen/
├── docker-compose.yml           # Оркестрация Docker-сервисов
├── Dockerfile                   # Образ PHP-FPM приложения
├── nginx/                       # Конфигурация веб-сервера
├── traefik/                     # Конфигурация reverse-proxy
└── october/                     # October CMS приложение
    ├── app/                     # Кастомный код (минимально используется)
    │   └── blueprints/          # Tailor-модели контента (YAML)
    ├── config/                  # Конфигурационные файлы
    ├── plugins/                 # Плагины
    └── themes/kv-vopros/        # Тема сайта
        ├── assets/
        ├── pages/
        └── partials/
```

---

## Важные файлы и за что они отвечают

### Docker и инфраструктура

- `docker-compose.yml` — конфигурация докер-окружения (Traefik, app, nginx, db).
- `Dockerfile` — образ PHP 8.2-FPM на Alpine Linux с необходимыми расширениями.
- `nginx/default.conf` — конфигурация nginx (кэширование статики, проксирование PHP).
- `traefik/traefik.yml` — статическая конфигурация Traefik (SSL, редиректы).

### October CMS приложение

- `october/.env` — переменные окружения (БД, ключи API и т.д.).
- `october/webpack.mix.js` — конфигурация сборки фронтенда (JS, CSS).
---

## Актуальная архитектура контента

### Tailor модели и данные

- `october/app/blueprints/case-study.yaml` — поток `Site\CaseStudy` для кейсов портфолио.
  - Поля: `title`, `slug`, `service_type`, `main_image`, `banner_image`, `gallery_images`.
- `october/app/blueprints/services.yaml` — глобальный набор `Site\Services` (используется в страницах как `[global services]`).
- `october/app/blueprints/main-page.yaml` и `october/app/blueprints/how-we-work.yaml` — данные для главной и информационных блоков.

### Логика портфолио

- Список кейсов: `october/themes/kv-vopros/pages/portfolio.htm`.
  - Запрос через `Tailor\Models\EntryRecord::inSection('Site\CaseStudy')->withDrafts()`.
  - Фильтры: `is_enabled=1`, `published_at <= now()`, `expired_at IS NULL OR expired_at >= now()`.
  - Сортировка: `published_at` по убыванию.
  - Рендер: частичный шаблон `october/themes/kv-vopros/partials/portfolio-grid.htm`.
- Карточка кейса: `october/themes/kv-vopros/partials/portfolio-card.htm`.
  - Превью: `main_image`, при отсутствии используется `banner_image`.
  - Фильтрация табами по `service_type` (`design-project`, `package-repair`).
- Детальная страница: `october/themes/kv-vopros/pages/case-study.htm`.
  - Ищет запись по `slug` и `is_enabled=1`.
  - Загружает `gallery_images`, при отсутствии записи редиректит на `/404`.

### Хранение медиа

- `main_image` и `banner_image` — пути из Media Library, физически в `october/storage/app/media`.
- `gallery_images` — загрузки через FileUpload, хранятся в `october/storage/app/uploads/public`, связи в таблице `system_files` (attachment_type `Tailor\Models\StreamRecord`).


---

## Настройка October CMS для медиа и импорта/экспорта

Эти настройки необходимы для расширения стандартных возможностей CMS.

### 1. Поддержка новых форматов медиа (например, .avif)

Для загрузки современных форматов изображений через медиа-менеджер October CMS и их корректной обработки.

**1.1. Системные пакеты (Dockerfile)**

Убедитесь, что в `Dockerfile` для сборки PHP-образа установлена необходимая системная библиотека и расширение `gd` скомпилировано с ее поддержкой.

```dockerfile
# ...
RUN apk add --no-cache \
    libavif-dev \
    # ... другие пакеты

RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp --with-avif \
    && docker-php-ext-install gd
# ...
```

**1.2. Конфигурация October CMS (`config/system.php`)**

Разрешите загрузку нового формата в системной конфигурации.
- **Файл**: `october/config/system.php`
- **Действие**: Добавьте расширение (без точки) в массив `allowed_file_types`.

```php
'allowed_file_types' => [
    // ...
    'avif',
],
```
После изменения файла очистите кэш: `php artisan cache:clear`.

### 2. Настройка импорта данных Tailor

**ВАЖНО**: Этот раздел актуален, если вы решите импортировать Tailor-данные (например, кейсы портфолио) через CSV/JSON. Стандартный импорт в October CMS имеет ограничения. Приведенные ниже правки системного файла `RecordImport.php` позволяют их обойти.

**Проблема**: Стандартный импорт требует `ID`, создает дубликаты при обновлении и не обрабатывает пустые даты.

**Решение**: После каждого обновления ядра October CMS необходимо вручную вносить правки в файл `/october/modules/tailor/models/RecordImport.php`.

**1. Разрешить импорт без ID (строки ~65-73)**
   - **Найти**: Блок, проверяющий `array_get($data, 'id')`.
   - **Заменить на**: Логику, которая ищет запись по `slug` или `title`, если `id` отсутствует.

**2. Убрать блокировку обновления (строки ~78-85)**
   - **Найти**: Условие `if (!$this->update_existing)`.
   - **Заменить на**: Код, который всегда разрешает обновление, если запись найдена.

**3. Исключить ID из обновлений и обработать пустые даты (строки ~88-95)**
   - **Найти**: Цикл `foreach ($data as $attr => $value)`.
   - **Заменить на**: Модифицированный цикл, который пропускает поле `id` для существующих записей и конвертирует пустые строки в `null` для полей дат.

**4. Изменить метод поиска дубликатов (строки ~106-118)**
   - **Найти**: Метод `findDuplicateRecord($data)`.
   - **Заменить на**: Расширенную логику, которая ищет дубликат не только по `id`, но и по `title` или `slug`.

> Эти изменения делают импорт/экспорт Tailor-данных (например, портфолио) более гибким и удобным.

---

## Часто используемые команды

- Поднять окружение (Docker):
  ```bash
  docker compose up -d
  ```
- Остановить окружение:
  ```bash
  docker compose down
  ```
- Выполнить artisan-команду в контейнере приложения:
  ```bash
  docker compose exec app php artisan <команда>
  ```
- Установить PHP-зависимости (внутри контейнера):
  ```bash
  docker compose exec app composer install
  ```
- Установить Node-зависимости и собрать ассеты:
  ```bash
  # Внутри контейнера app
  docker compose exec app npm install
  docker compose exec app npm run dev # или npm run production
  ```
- Очистить кэш October CMS:
  ```bash
  docker compose exec app php artisan cache:clear
  docker compose exec app php artisan view:clear
  ```

---

## Переменные окружения (.env)

В Docker используются переменные из корневого `.env`, а October CMS читает `october/.env`.

Ключевые переменные в файле `october/.env`:

| Переменная | Описание |
|------------|----------|
| `APP_KEY` | Ключ шифрования (генерируется командой `php artisan key:generate`) |
| `APP_URL` | Базовый URL сайта (например, https://your-domain.com) |
| `APP_ENV` | Окружение (`production` или `local`) |
| `ACTIVE_THEME` | Активная тема October CMS (сейчас `kv-vopros`) |
| `BACKEND_URI` | Путь к админке (по умолчанию `/admin`) |
| `LINK_POLICY` | Политика генерации ссылок (`detect`, `secure`, `force`) |
| `DB_HOST` | Хост БД (в Docker-окружении это `db`) |
| `DB_DATABASE` | Имя базы данных |
| `DB_USERNAME` | Пользователь БД |
| `DB_PASSWORD` | Пароль БД |

---

## Рекомендации по деплою

- Всегда храните чувствительные переменные в `october/.env`, а в репозитории — файл `.env.example` с шаблоном.
- Директории `storage/` и `bootstrap/cache` должны быть доступны для записи веб-сервером.
- Перед обновлениями ядра или плагинов обязательно делайте бэкап базы данных и директории `storage/`.
- После деплоя не забывайте выполнять миграции и очищать кэш.

---

*Документация актуализирована: Декабрь 2025*
