<?php

Route::get('/sitemap.xml', function () {
    return response(\App\Classes\SiteSeo::sitemapXml(), 200, [
        'Content-Type' => 'application/xml; charset=UTF-8',
        'Cache-Control' => 'no-store',
    ]);
});

Route::get('/image-preview/{key}', function ($key) {
    return app(\App\Classes\ImagePipeline::class)->response($key);
})->where('key', '[a-f0-9]{64}');
