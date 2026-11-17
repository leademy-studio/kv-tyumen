<?php
// Pure PHP tests: no database writes or network requests.
require __DIR__ . '/../october/app/classes/RepairSchema.php';
use App\Classes\RepairSchema;
function checkSchema($condition, $message) {
    if (!$condition) { throw new RuntimeException($message); }
}
$company = (require __DIR__ . '/../october/config/repair_schema.php')['company'];
$page = [
    'url' => 'https://kv-tyumen.ru/repairs/example', 'title' => 'SEO title',
    'service_name' => 'Ремонт двухкомнатной квартиры', 'service_type' => 'Ремонт двухкомнатной квартиры',
    'service_description' => 'Описание услуги',
    'breadcrumbs' => [['name' => 'Главная', 'url' => $company['url']], ['name' => 'Ремонт', 'url' => 'https://kv-tyumen.ru/repairs/example']],
    'faq' => [['question' => 'Вопрос "один"', 'answer' => '</script><script>alert(1)</script> & ответ'], ['question' => '', 'answer' => 'Пустой вопрос']],
];
$pricing = ['section_title' => 'Цены на ремонт', 'plans' => [
    ['title' => 'Стандарт', 'price' => '29 000 ₽ / м²'],
    ['title' => 'По запросу', 'price' => 'По запросу'],
    ['title' => 'От', 'price' => 'от 35 000 ₽ / м²'],
    ['title' => '', 'price' => '100'],
]];
$graph = RepairSchema::build($page, $pricing, $company);
$nodes = array_column($graph['@graph'], null, '@type');
checkSchema(count($nodes) === 5, 'Complete graph');
checkSchema($nodes['WebPage']['name'] === 'SEO title' && $nodes['Service']['name'] === $page['service_name'], 'Service must not copy SEO title');
$ids = array_column($graph['@graph'], '@id');
checkSchema(count($ids) === count(array_unique($ids)), 'Unique IDs');
$walk = function ($value) use (&$walk, $ids) {
    if (!is_array($value)) { return; }
    if (count($value) === 1 && isset($value['@id'])) { checkSchema(in_array($value['@id'], $ids, true), 'Unresolved reference'); }
    foreach ($value as $item) { $walk($item); }
};
$walk($graph);
$offers = $nodes['Service']['hasOfferCatalog']['itemListElement'];
checkSchema(count($offers) === 3, 'Visible plans only');
checkSchema($offers[0]['priceSpecification']['price'] === 29000 && $offers[0]['priceSpecification']['unitCode'] === 'MTK', 'Unit price');
checkSchema(!isset($offers[1]['priceSpecification']) && !isset($offers[2]['priceSpecification']), 'No invented prices');
$json = RepairSchema::encode($graph);
checkSchema(!str_contains($json, '</script>'), 'Script injection protection');
$decoded = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
checkSchema($decoded['@graph'][4]['mainEntity'][0]['acceptedAnswer']['text'] === $page['faq'][0]['answer'], 'Literal visible FAQ text preserved');
foreach (['29 000 ₽ / м²' => 29000, '35 000 ₽ / м²' => 35000, '45000 RUB' => 45000, '60000' => 60000, '29 000,50 ₽/м²' => 29000.5] as $input => $expected) {
    checkSchema(RepairSchema::price($input) === $expected, 'Price parse: ' . $input);
}
foreach (['от 29000', '29000–35000', 'По запросу', '0', '-100', '2 этапа за 10000', '29000 USD'] as $input) {
    checkSchema(RepairSchema::price($input) === null, 'Unsafe price: ' . $input);
}
$empty = $page; $empty['faq'] = []; $empty['breadcrumbs'] = []; $empty['home'] = true; $empty['url'] = $company['url'];
$minimal = array_column(RepairSchema::build($empty, ['section_title' => '', 'plans' => $pricing['plans']], $company)['@graph'], null, '@type');
checkSchema(!isset($minimal['FAQPage']) && !isset($minimal['BreadcrumbList']), 'Optional entities omitted');
checkSchema(!isset($minimal['Service']['hasOfferCatalog']), 'Hidden pricing omitted');
checkSchema($minimal['Service']['@id'] === 'https://kv-tyumen.ru/#repair-service', 'Homepage stable ID');
$pricing['plans'][0]['price'] = '31 000 ₽ / м²';
$page['faq'][0]['answer'] = 'Обновлённый ответ';
$updated = array_column(RepairSchema::build($page, $pricing, $company)['@graph'], null, '@type');
checkSchema($updated['Service']['hasOfferCatalog']['itemListElement'][0]['priceSpecification']['price'] === 31000, 'Tariff changes reflected');
checkSchema($updated['FAQPage']['mainEntity'][0]['acceptedAnswer']['text'] === 'Обновлённый ответ', 'FAQ changes reflected');
echo "PASS: connected graph, new service URLs, optional sections, live content, price parsing and JSON safety\n";

// Exercise the actual CMS adapter with a new, previously unknown service slug.
require __DIR__ . '/../october/app/classes/SiteUrl.php';
function config($key) { return $GLOBALS['company']; }
$newPage = (object) ['url' => '/repairs/:slug', 'title' => 'Ремонт двухкомнатной квартиры'];
$newEntry = (object) ['title' => $newPage->title, 'meta_title' => 'Title новой услуги', 'cr_faq' => []];
$canonical = 'https://kv-tyumen.ru/repairs/new-service';
$automatic = json_decode(RepairSchema::forPage($newPage, $canonical, null, null, $newEntry, (object) $pricing), true);
$autoNodes = array_column($automatic['@graph'], null, '@type');
checkSchema($autoNodes['Service']['name'] === $newPage->title, 'New page uses its H1');
checkSchema($autoNodes['Service']['@id'] === $canonical . '#service', 'New page uses canonical');
checkSchema(count($autoNodes['BreadcrumbList']['itemListElement']) === 3, 'New page breadcrumb hierarchy');
checkSchema(!isset($autoNodes['Service']['description']), 'No invented description');
checkSchema(RepairSchema::forPage($newPage, null, null, null, $newEntry, $pricing) === null, 'Nonindexable page is not marked as a service');
echo "PASS: CMS adapter automatically handles a new repair page without hand-written JSON-LD\n";
