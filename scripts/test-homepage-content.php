<?php
// Integration test; all temporary CMS changes are rolled back.
// docker compose exec -T -e KV_HOMEPAGE_LOCAL_TEST=1 app php < scripts/test-homepage-content.php

if (PHP_SAPI !== 'cli' || getenv('KV_HOMEPAGE_LOCAL_TEST') !== '1') {
    exit(1);
}

require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\DB;
use Tailor\Models\GlobalRecord;

function renderHomepage(): string
{
    $result = (new \Cms\Classes\Controller())->run('/');
    return is_string($result) ? $result : $result->getContent();
}

function checkHomepage(bool $condition, string $message): void
{
    if (!$condition) {
        throw new \RuntimeException($message);
    }
}

DB::beginTransaction();
try {
    $page = GlobalRecord::inGlobal('Site\\MainPage')->firstOrFail();
    $page->hero_title = 'Проверка заголовка главной';
    $page->promo_title = 'Проверка редактирования акции';
    $page->calculation_title = 'Проверка формы расчёта';
    $page->save();

    $service = $page->service_cards()->firstOrFail();
    $service->subtitle_desktop = 'Проверка карточки услуги';
    $service->save();

    $seo = $page->seo_text_blocks()->firstOrFail();
    $seo->block_text = 'Проверка редактирования SEO-текста';
    $seo->save();

    $faq = $page->faq_items()->firstOrFail();
    $faq->question = 'Проверка редактирования FAQ';
    $faq->answer = 'Текст </script><script>проверка</script> & кавычки "ответ"';
    $faq->save();

    $html = renderHomepage();
    foreach ([
        'Проверка заголовка главной',
        'Проверка редактирования акции',
        'Проверка формы расчёта',
        'Проверка карточки услуги',
        'Проверка редактирования SEO-текста',
        'Проверка редактирования FAQ',
    ] as $value) {
        checkHomepage(str_contains($html, $value), 'Edited homepage content was not rendered: ' . $value);
    }
    checkHomepage(str_contains($html, '/storage/app/media/homepage/cta-image.png'), 'Media Library homepage image was not rendered');
    checkHomepage(!str_contains($html, '</script><script>проверка'), 'FAQ JSON-LD can close its script element');

    preg_match_all('~<script type="application/ld\+json">(.*?)</script>~s', $html, $matches);
    $schemas = array_map(fn ($json) => json_decode($json, true, 512, JSON_THROW_ON_ERROR), $matches[1]);
    $faqs = array_values(array_filter($schemas, fn ($schema) => ($schema['@type'] ?? '') === 'FAQPage'));
    checkHomepage(count($faqs) === 1, 'Exactly one FAQPage schema must be rendered');
    checkHomepage($faqs[0]['mainEntity'][0]['acceptedAnswer']['text'] === $faq->answer, 'FAQ schema does not match CMS content');

    foreach ($page->seo_text_blocks()->get() as $emptySeo) {
        $emptySeo->block_title = '';
        $emptySeo->block_text = '';
        $emptySeo->save();
    }
    foreach ($page->faq_items()->get() as $emptyFaq) {
        $emptyFaq->question = '';
        $emptyFaq->answer = '';
        $emptyFaq->save();
    }
    $html = renderHomepage();
    checkHomepage(!str_contains($html, 'class="faq"') && !str_contains($html, '"FAQPage"'), 'Blank FAQ rows still render');
    checkHomepage(!str_contains($html, 'class="seo-text"'), 'Blank SEO rows still render');

    $page->faq_items()->delete();
    $page->seo_text_blocks()->delete();
    $html = renderHomepage();
    checkHomepage(!str_contains($html, 'class="faq"') && !str_contains($html, '"FAQPage"'), 'Deleted FAQ still renders');
    checkHomepage(!str_contains($html, 'class="seo-text"'), 'Deleted SEO text still renders');

    echo "PASS: homepage fields, images, repeaters, SEO text and FAQ are database-backed and render correctly.\n";
} finally {
    DB::rollBack();
}
