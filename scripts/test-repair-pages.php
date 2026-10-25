<?php
// Run only in a migrated local/test installation; all database changes are rolled back.
// KV_REPAIR_PAGES_LOCAL_TEST=1 php /path/to/scripts/test-repair-pages.php
if (PHP_SAPI !== 'cli' || getenv('KV_REPAIR_PAGES_LOCAL_TEST') !== '1') { exit(1); }
require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();
if (!app()->environment(['local', 'testing'])) { throw new RuntimeException('Local/test installation required'); }

use App\Classes\SiteSeo;
use Illuminate\Support\Facades\DB;
use Tailor\Models\EntryRecord;
use Tailor\Models\GlobalRecord;

function expectRepairPage($condition, $message) {
    if (!$condition) { throw new RuntimeException($message); }
}
function renderRepairPage($path) {
    \Request::swap(\Illuminate\Http\Request::create('http://localhost' . $path));
    $result = (new \Cms\Classes\Controller)->run($path);
    return [is_string($result) ? $result : $result->getContent(), is_string($result) ? 200 : $result->getStatusCode()];
}
function repairSchemas($html) {
    preg_match_all('~<script type="application/ld\+json">(.*?)</script>~s', $html, $matches);
    return array_map(fn ($json) => json_decode($json, true, 512, JSON_THROW_ON_ERROR), $matches[1]);
}

DB::beginTransaction();
try {
    $services = GlobalRecord::findForGlobal('Site\\Services');
    $services->cr_title = 'Пакетный ремонт';
    $services->cr_meta_title = 'Общий пакетный ремонт';
    $services->cr_meta_description = 'Общее описание пакетного ремонта';
    $services->cr_section2_title = 'Общие преимущества ремонта';
    $services->cr_steps_title = 'Как мы работаем';
    $services->save();
    $services->cr_steps()->create(['step_title' => 'Общий этап', 'description' => 'Описание этапа', 'sort_order' => 1]);
    $services->cr_faq()->create(['question' => 'Общий вопрос пакетного ремонта?', 'answer' => 'Общий ответ', 'sort_order' => 1]);
    $prices = GlobalRecord::findForGlobal('Site\\RepairPrices');
    $prices->section_title = 'Тарифы ремонта';
    $prices->save();
    $prices->plans()->create(['title' => 'Общий тариф', 'price' => 'Тестовая цена', 'sort_order' => 1]);
    $sourceBefore = renderRepairPage('/repairs')[0];

    $entries = [];
    foreach (['однокомнатной', 'двухкомнатной'] as $index => $kind) {
        $entry = EntryRecord::inSection('Site\\RepairPage');
        $entry->title = 'Ремонт ' . $kind . ' квартиры';
        $entry->slug = 'repair-template-test-' . ($index + 1);
        $entry->meta_title = 'Title ' . $kind;
        $entry->meta_description = 'Description ' . $kind;
        $entry->is_enabled = true;
        $entry->setDraftPublish();
        $entry->save();
        $entries[] = $entry;
    }
    $invalid = EntryRecord::inSection('Site\\RepairPage');
    $invalid->title = 'Некорректный адрес';
    $invalid->slug = 'nested/path';
    $invalid->setDraftPublish();
    try {
        $invalid->save();
        throw new RuntimeException('Invalid slug must fail validation');
    } catch (\October\Rain\Exception\ValidationException $exception) {
        expectRepairPage(isset($exception->errors()['slug']), 'Invalid slug is rejected');
    }
    $first = $entries[0];
    $first->cr_section2_title = 'Индивидуальные преимущества однокомнатной';
    $first->cr_card1_caption = 'Индивидуальная подпись';
    $first->cr_cta_title = 'Расчёт для однокомнатной';
    $first->cr_seo_title = 'Подробнее об однокомнатной';
    $first->save();
    $first->cr_seo_blocks()->create(['block_title' => 'Планировка', 'block_text' => 'Текст об однокомнатной', 'sort_order' => 1]);
    $answer = 'Ответ </script><script>alert(1)</script> & "кавычки"';
    $first->cr_faq()->create(['question' => 'Вопрос однокомнатной?', 'answer' => $answer, 'sort_order' => 1]);
    [$html, $status] = renderRepairPage('/repairs/' . $first->slug);
    expectRepairPage($status === 200, 'Published page returns 200');
    expectRepairPage(substr_count($html, '<h1 ') === 1 && str_contains($html, $first->title), 'Page has its own single H1');
    expectRepairPage(substr_count($html, '<title>') === 1 && str_contains($html, '<title>Title однокомнатной</title>'), 'Own metadata renders exactly once');
    foreach (['Индивидуальные преимущества однокомнатной', 'Индивидуальная подпись', 'Расчёт для однокомнатной', 'Текст об однокомнатной', 'Общий тариф', 'Общий этап'] as $text) {
        expectRepairPage(str_contains($html, $text), 'Expected content: ' . $text);
    }
    expectRepairPage(str_contains($html, 'href="https://kv-tyumen.ru/repairs/' . $first->slug . '"'), 'Self canonical matches route');
    expectRepairPage(!str_contains($html, 'Общий вопрос пакетного ремонта?'), 'FAQ does not inherit from /repairs');
    expectRepairPage(!str_contains($html, '</script><script>alert'), 'FAQ cannot break out of JSON-LD');
    $schemas = repairSchemas($html);
    $faq = array_values(array_filter($schemas, fn ($item) => ($item['@type'] ?? '') === 'FAQPage'));
    expectRepairPage(count($faq) === 1 && $faq[0]['mainEntity'][0]['acceptedAnswer']['text'] === $answer, 'FAQ JSON-LD matches own answer');
    $crumbs = array_values(array_filter($schemas, fn ($item) => ($item['@type'] ?? '') === 'BreadcrumbList'));
    expectRepairPage($crumbs[0]['itemListElement'][2]['item'] === 'https://kv-tyumen.ru/repairs/' . $first->slug, 'Breadcrumb uses resolved URL');

    $secondHtml = renderRepairPage('/repairs/' . $entries[1]->slug)[0];
    expectRepairPage(str_contains($secondHtml, 'Общие преимущества ремонта'), 'Empty shared fields inherit source');
    expectRepairPage(!str_contains($secondHtml, 'Текст об однокомнатной') && !str_contains($secondHtml, '"FAQPage"'), 'Pages have independent SEO text and FAQ');
    expectRepairPage(renderRepairPage('/repairs')[0] === $sourceBefore, 'Source page remains unchanged');
    $urls = array_column(SiteSeo::sitemap(), 'loc');
    expectRepairPage(in_array('https://kv-tyumen.ru/repairs/' . $first->slug, $urls, true), 'Published page is in sitemap');

    foreach ([['is_enabled' => false], ['published_at' => now()->addDay()], ['expired_at' => now()->subDay()], ['draft_mode' => \Tailor\Classes\Scopes\DraftableScope::MODE_NEW_SAVED]] as $changes) {
        $hidden = EntryRecord::inSection('Site\\RepairPage')->find($entries[1]->id);
        $before = [];
        foreach ($changes as $key => $value) { $before[$key] = $hidden->$key; $hidden->$key = $value; }
        $hidden->save(['force' => true]);
        $hiddenResult = renderRepairPage('/repairs/' . $hidden->slug);
        expectRepairPage($hiddenResult[1] === 404, 'Unpublished page returns 404: ' . json_encode($changes) . ', got ' . $hiddenResult[1]);
        expectRepairPage(!in_array('https://kv-tyumen.ru/repairs/' . $hidden->slug, array_column(SiteSeo::sitemap(), 'loc'), true), 'Unpublished page is absent from sitemap');
        foreach ($before as $key => $value) { $hidden->$key = $value; }
        $hidden->save(['force' => true]);
    }
    expectRepairPage(renderRepairPage('/repairs/missing-repair-template-test')[1] === 404, 'Missing page returns 404');
    $first->cr_faq()->delete();
    $first->cr_seo_blocks()->delete();
    $html = renderRepairPage('/repairs/' . $first->slug)[0];
    expectRepairPage(!str_contains($html, 'class="faq"') && !str_contains($html, '"FAQPage"'), 'Deleted FAQ stays absent');
    expectRepairPage(!str_contains($html, 'class="seo-text"'), 'Deleted SEO text stays absent');
    echo "PASS: independent pages, metadata, inherited visuals, pricing, FAQ, canonical, breadcrumbs, sitemap, publication states and 404; source unchanged.\n";
} catch (Throwable $exception) {
    fwrite(STDERR, 'FAIL: ' . $exception->getMessage() . "\n");
    $failed = true;
} finally { DB::rollBack(); }
if (!empty($failed)) { exit(1); }

