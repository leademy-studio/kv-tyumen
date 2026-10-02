<?php namespace App\Classes;

use BackendAuth;
use Media\Classes\MediaLibrary;
use Media\Widgets\MediaManager;

class ImageBackend
{
    public static function handle($controller, string $handler): ?array
    {
        $request = $controller->getAjaxRequest();
        $alias = $request->component;
        $method = $request->handler;
        if (!in_array($method, ['onGenerateThumbnails', 'onGetSidebarThumbnail'], true)
            || !$alias || !($controller->widget->make($alias) instanceof MediaManager)) return null;
        if (!BackendAuth::userHasAccess('media.library')) abort(403);
        if ($method === 'onGetSidebarThumbnail') {
            return ['markup' => self::markup((string) post('path'), 300, 255, 'auto')];
        }
        $result = [];
        $batch = post('batch');
        if (!is_array($batch) || count($batch) > 6) abort(400);
        foreach ($batch as $info) {
            $w = filter_var($info['width'] ?? null, FILTER_VALIDATE_INT);
            $h = filter_var($info['height'] ?? null, FILTER_VALIDATE_INT);
            if (!$w || !$h || min($w, $h) < 1 || max($w, $h) > 512) abort(400);
            $result[] = ['id' => (string) ($info['id'] ?? ''), 'markup' => self::markup((string) ($info['path'] ?? ''), $w, $h, 'cover')];
        }
        return ['generatedThumbnails' => $result];
    }

    private static function markup(string $path, int $width, int $height, string $mode): string
    {
        $path = MediaLibrary::validatePath($path);
        $pipeline = app(ImagePipeline::class);
        $spec = $pipeline->mediaSpec($path, $width, $height, ['mode' => $mode]);
        $url = $spec ? $pipeline->url($spec) : MediaLibrary::url($path);
        return '<img data-kv-preview="' . e($url) . '" alt="" />';
    }
}
