<?php namespace App\Classes;

use System\Classes\ResizeImageItem;
use Cache;

class OptimizedResizeImages extends \System\Classes\ResizeImages
{
    protected function prepareRequest($image, $width = null, $height = null, $options = [])
    {
        $item = (new ResizeImageItem)->fromObject($image);
        // Async previews are only used in backend UI, where the loader handles pending jobs.
        if (app()->runningInBackend() && $item->path) {
            $pipeline = app(ImagePipeline::class);
            if ($spec = $pipeline->describe($item->path, (int) $width, (int) $height, is_array($options) ? $options : ['mode' => $options])) {
                return $pipeline->url($spec);
            }
        }
        return parent::prepareRequest($image, $width, $height, $options);
    }

    protected function processImage($cacheKey): void
    {
        Cache::store('file')->lock('kv.image.legacy.' . $cacheKey, 180)->block(10, function () use ($cacheKey) {
            $info = $this->getCache($cacheKey);
            if (!$info) return;
            $item = (new ResizeImageItem)->fromCacheInfo($cacheKey, $info);
            if ($this->hasFile($item)) return;
            parent::processImage($cacheKey);
        });
    }
}
