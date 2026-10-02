<?php namespace App\Classes;

use Cache;
use Config;
use Log;
use Queue;
use Resizer;
use Media\Classes\MediaLibrary;

/** Immutable, content-addressed derivatives; originals are never modified. */
class ImagePipeline
{
    public function describe(string $source, int $width = 2560, int $height = 2560, array $options = []): ?array
    {
        $path = realpath($source);
        $root = realpath(Config::get('filesystems.disks.media.root'));
        if (!$path || !$root || !str_starts_with($path, $root . DIRECTORY_SEPARATOR) || !is_file($path)) {
            return null;
        }
        $size = @getimagesize($path);
        $extension = match ($size[2] ?? null) { IMAGETYPE_JPEG => 'jpg', IMAGETYPE_PNG => 'png', IMAGETYPE_WEBP => 'webp', default => null };
        if (!$extension || max($size[0], $size[1]) > 20000 || $size[0] * $size[1] > 50000000) {
            return null;
        }
        // Keep animated formats on the original CMS path.
        if ($extension === 'webp' && str_contains(file_get_contents($path, false, null, 0, 256), 'ANIM')) {
            return null;
        }
        $options = array_intersect_key($options, array_flip(['mode', 'quality', 'offset', 'sharpen', 'interlace', 'extension']));
        $options += ['mode' => 'auto', 'quality' => 90];
        $output = $options['extension'] ?? $extension;
        if ($output === 'auto') $output = $extension;
        if (!in_array($output, ['jpg', 'jpeg', 'png', 'webp', 'avif'], true)) return null;
        $options['extension'] = $output;
        ksort($options);
        // Hash contents, not just mtime: same-second, same-size replacements are valid.
        $spec = ['source' => $path, 'hash' => hash_file('sha256', $path), 'width' => max(0, $width),
            'height' => max(0, $height), 'options' => $options, 'extension' => $output, 'source_extension' => $extension, 'version' => 1];
        $spec['key'] = hash('sha256', json_encode($spec));
        if (!Cache::has('kv.image.spec.' . $spec['key'])) Cache::forever('kv.image.spec.' . $spec['key'], $spec);
        return $spec;
    }

    public function path(array $spec): string
    {
        return storage_path('app/resources/image-pipeline/' . $spec['key'] . '.' . $spec['extension']);
    }

    public function publicUrl(array $spec): string
    {
        return '/storage/app/resources/image-pipeline/' . $spec['key'] . '.' . $spec['extension'];
    }

    public function url(array $spec): string
    {
        if (is_file($this->path($spec))) return $this->publicUrl($spec);
        $this->enqueue($spec);
        return '/image-preview/' . $spec['key'];
    }

    public function enqueue(array $spec): void
    {
        if (is_file($this->path($spec)) || Cache::get('kv.image.failed.' . $spec['key'])) return;
        // Shared file-cache lock covers all FPM processes and the queue worker.
        $lock = Cache::store('file')->lock('kv.image.queued.' . $spec['key'], 600);
        if (!$lock->get()) return;
        try {
            Queue::connection('images')->push(new \App\Jobs\PrepareImage($spec, $lock->owner()), '', 'images');
        } catch (\Throwable $e) {
            $lock->release();
            throw $e;
        }
    }

    public function render(array $spec): void
    {
        $lock = Cache::store('file')->lock('kv.image.render.' . $spec['key'], 180);
        $lock->block(10, function () use ($spec) {
            if (is_file($this->path($spec))) return;
            if (!is_file($spec['source']) || hash_file('sha256', $spec['source']) !== $spec['hash']) {
                throw new \RuntimeException('Image source was replaced or removed');
            }
            $start = microtime(true);
            $work = $this->workingCopy($spec);
            $source = max($spec['width'], $spec['height']) <= 2560 ? $work : $spec['source'];
            if ($spec['width'] === 2560 && $spec['height'] === 2560 && $spec['options']['mode'] === 'auto'
                && $spec['extension'] === $spec['source_extension'] && $spec['options']['quality'] === 90) {
                $target = $this->path($spec);
                if (!is_dir(dirname($target))) mkdir(dirname($target), 0775, true);
                $temp = $target . '.' . bin2hex(random_bytes(8)) . '.tmp';
                try {
                    if (!copy($work, $temp) || !rename($temp, $target)) throw new \RuntimeException('Cannot publish working copy');
                } finally { if (is_file($temp)) unlink($temp); }
            } else {
                $this->saveImage($source, $this->path($spec), $spec['width'], $spec['height'], $spec['options']);
            }
            Log::channel('images')->info('image.generated', ['key' => $spec['key'], 'ms' => round((microtime(true) - $start) * 1000),
                'peak_mb' => round(memory_get_peak_usage(true) / 1048576, 1)]);
        });
    }

    public function workingCopy(array $spec): string
    {
        $target = storage_path('app/resources/image-pipeline/work-' . $spec['hash'] . '.' . $spec['source_extension']);
        if (is_file($target)) return $target;
        return Cache::store('file')->lock('kv.image.work.' . $spec['hash'], 180)->block(10, function () use ($spec, $target) {
            if (is_file($target)) return $target;
            $size = getimagesize($spec['source']);
            if (max($size[0], $size[1]) <= 2560) return $spec['source'];
            if (!is_dir(dirname($target))) mkdir(dirname($target), 0775, true);
            $temp = dirname($target) . '/.' . bin2hex(random_bytes(12)) . '.' . $spec['source_extension'];
            try {
                // Intervention applies EXIF orientation before scaling and retains alpha.
                $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver);
                $manager->read($spec['source'])->scaleDown(width: 2560, height: 2560)->save($temp, quality: 90);
                chmod($temp, 0664);
                if (!rename($temp, $target)) throw new \RuntimeException('Cannot publish working image');
            } finally { if (is_file($temp)) unlink($temp); }
            return $target;
        });
    }

    private function saveImage(string $source, string $target, int $width, int $height, array $options): void
    {
        if (!is_dir(dirname($target))) mkdir(dirname($target), 0775, true);
        $temp = dirname($target) . '/.' . bin2hex(random_bytes(12)) . '.' . pathinfo($target, PATHINFO_EXTENSION);
        try {
            if ($options['mode'] === 'auto') {
                $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver);
                $manager->read($source)->scaleDown(width: $width ?: null, height: $height ?: null)
                    ->save($temp, quality: $options['quality']);
            } else {
                Resizer::open($source)->resize($width ?: null, $height ?: null, $options)->save($temp);
            }
            if (!is_file($temp) || !filesize($temp)) throw new \RuntimeException('Empty image derivative');
            chmod($temp, 0664);
            if (!rename($temp, $target)) throw new \RuntimeException('Cannot publish image derivative');
        } finally {
            if (is_file($temp)) unlink($temp);
        }
    }

    public function mediaSpec(string $path, int $width, int $height, array $options = []): ?array
    {
        $path = MediaLibrary::validatePath($path);
        return $this->describe(Config::get('filesystems.disks.media.root') . '/' . ltrim($path, '/'), $width, $height, $options);
    }

    public function warm(string $path): void
    {
        if ($spec = $this->mediaSpec($path, 1920, 1920, ['extension' => 'webp', 'quality' => 82])) $this->enqueue($spec);
        foreach ([[2560, 2560, 'auto'], [190, 190, 'cover'], [165, 165, 'cover'], [75, 75, 'cover'], [300, 255, 'auto']] as [$w, $h, $mode]) {
            if ($spec = $this->mediaSpec($path, $w, $h, ['mode' => $mode])) $this->enqueue($spec);
        }
    }

    public static function mediaUrl($path): string
    {
        if (is_array($path)) $path = array_first($path);
        if ($path instanceof \Illuminate\Support\Collection) $path = $path->first();
        $original = MediaLibrary::url($path);
        if (!is_string($path) || $path === '') return $original;
        $pipeline = app(self::class);
        $spec = $pipeline->mediaSpec($path, 1920, 1920, ['extension' => 'webp', 'quality' => 82]);
        if (!$spec) return $original;
        if (is_file($pipeline->path($spec))) {
            return filesize($pipeline->path($spec)) < filesize($spec['source']) ? url($pipeline->publicUrl($spec)) : $original;
        }
        $pipeline->enqueue($spec);
        // Public pages remain usable while the background worker prepares the copy.
        return $original;
    }

    public function response(string $key)
    {
        $spec = preg_match('/^[a-f0-9]{64}$/D', $key) ? Cache::get('kv.image.spec.' . $key) : null;
        abort_unless(is_array($spec), 404);
        $ready = is_file($this->path($spec));
        if (!$ready && Cache::get('kv.image.failed.' . $key)) {
            return response()->json(['error' => 'Image preview could not be prepared'], 422)->header('Cache-Control', 'no-store');
        }
        if (!$ready) $this->enqueue($spec);
        return response()->json(['ready' => $ready, 'url' => $ready ? $this->publicUrl($spec) : null], $ready ? 200 : 202)
            ->header('Cache-Control', 'no-store')->header('Retry-After', '2');
    }
}
