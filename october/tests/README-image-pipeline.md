# Image upload pipeline

Media originals remain unchanged. A single `image-worker` creates a shared 2560-pixel working copy, admin thumbnails and a 1920-pixel WebP. Public portfolio pages use WebP only when it is smaller than the original. Animated and unsupported formats use the existing CMS path.

Admin uploads run two files at a time. Overwrite approval applies per file. Thumbnail status requests are deduplicated and limited to two concurrent requests; finished thumbnails are served directly by nginx. Content hashes invalidate copies even after same-size, same-second replacements.

## Verification

Use an isolated application/database copy, never the production database. `scripts/test-image-pipeline.php` requires the environment variable `DB_DATABASE=kv_image_test_20261002` and the existing `portfolio/repairs/prichalnaia/5.jpg` fixture. Run from the October root with no competing image worker. It checks queue deduplication, generated dimensions, original preservation, cache reuse, replacement invalidation and WebP output.

Browser checks: upload ten files, confirm all ten persist, cancel and accept an overwrite, open media thumbnails and the case-study editor, and verify loaded previews without repeated `/resize/` requests.

## Operations

Start only the new service with `docker compose up -d --no-deps image-worker`. It bypasses the application entrypoint, which contains account initialization. Restart this worker after image-pipeline code updates. Do not recreate the web application merely to deploy these changes.

For the initial rollout, install `php/fpm-observability.conf` as `/usr/local/etc/php-fpm.d/zz-observability.conf` inside the running app, validate with `php-fpm -t`, then gracefully reload FPM with USR2. Compose mounts the same file on future recreations. Validate and gracefully reload nginx after updating its configuration, checking the active configuration when a bind-mounted file was replaced.

Install `php/logrotate-images.conf` into `/etc/logrotate.d/kv-tyumen-images`. Image timings and errors are in `storage/logs/images-YYYY-MM-DD.log` (14-day retention), slow PHP requests in `storage/logs/php-slow.log`, and nginx logs include request/upstream timings. The worker has one process, a 640 MB container limit and 0.75 CPU quota. Keep FPM at five children unless measurements justify a change.

Check the `images` queue in the existing `jobs` table and `queue:failed`; do not clear unrelated queues. Derivatives live in `storage/app/resources/image-pipeline/`. Do not clear application cache while previews are pending: it holds their descriptors and locks.

Rollback: restore only the release file allowlist from the deployment backup or revert its commit, stop `image-worker`, restore nginx/FPM configuration and reload them. Originals, content records and credentials do not need restoration. Generated derivatives may remain unused safely.
