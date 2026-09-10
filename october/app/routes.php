<?php

Route::get('/sitemap.xml', function () {
    return response(\App\Classes\SiteSeo::sitemapXml(), 200, [
        'Content-Type' => 'application/xml; charset=UTF-8',
        'Cache-Control' => 'no-store',
    ]);
});
