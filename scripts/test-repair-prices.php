<?php
// Integration test; all temporary pricing changes are rolled back.
// docker compose exec -T --user www-data -e KV_REPAIR_PRICES_TEST=1 app php < scripts/test-repair-prices.php

if (PHP_SAPI !== 'cli' || getenv('KV_REPAIR_PRICES_TEST') !== '1') {
    exit(1);
}

require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\DB;
use Tailor\Models\GlobalRecord;

function renderPricingPage(string $url): string
{
    $result = (new \Cms\Classes\Controller())->run($url);
    return is_string($result) ? $result : $result->getContent();
}

function checkPricing(bool $condition, string $message): void
{
    if (!$condition) {
        throw new \RuntimeException($message);
    }
}

function parsePricingSchemas(string $html): array
{
    preg_match_all('~<script type="application/ld\+json">(.*?)</script>~s', $html, $matches);
    return array_map(
        fn ($json) => json_decode($json, true, 512, JSON_THROW_ON_ERROR),
        $matches[1]
    );
}

DB::beginTransaction();
try {
    $prices = GlobalRecord::inGlobal('Site\\RepairPrices')->firstOrFail();
    $initialHomepage = renderPricingPage('/');
    $serviceSchemas = array_values(array_filter(
        parsePricingSchemas($initialHomepage),
        fn ($schema) => ($schema['@id'] ?? '') === 'https://kv-tyumen.ru/#repair-service'
    ));
    checkPricing(count($serviceSchemas) === 1, 'Homepage must contain exactly one repair pricing Service schema');
    $catalog = $serviceSchemas[0]['hasOfferCatalog'] ?? [];
    $offers = $catalog['itemListElement'] ?? [];
    checkPricing(($catalog['@type'] ?? '') === 'OfferCatalog', 'Repair pricing schema has no OfferCatalog');
    checkPricing(count($offers) === 4, 'Repair pricing schema offer count is invalid');
    checkPricing(
        array_column(array_column($offers, 'priceSpecification'), 'price') === ['29000', '35000', '45000', '60000'],
        'Repair pricing schema prices differ from visible CMS prices'
    );
    foreach ($offers as $offer) {
        $specification = $offer['priceSpecification'] ?? [];
        checkPricing(($specification['priceCurrency'] ?? '') === 'RUB', 'Repair pricing schema currency is invalid');
        checkPricing(($specification['unitText'] ?? '') === 'м²', 'Repair pricing schema unit is invalid');
    }

    $plan = $prices->plans()->orderBy('sort_order')->firstOrFail();
    $plan->price = 'Тестовая цена из отдельной сущности';
    $plan->save();

    $homepage = renderPricingPage('/');
    $repairs = renderPricingPage('/repairs');
    foreach (['homepage' => $homepage, 'repairs' => $repairs] as $pageName => $html) {
        checkPricing(str_contains($html, 'Тестовая цена из отдельной сущности'), 'Edited price is missing on ' . $pageName);
        checkPricing(substr_count($html, 'class="pricing"') === 1, 'Pricing section count is invalid on ' . $pageName);
        checkPricing(substr_count($html, '<article class="plan-card') === 4, 'Plan count is invalid on ' . $pageName);
    }

    $aboutPosition = strpos($homepage, 'class="about"');
    $pricingPosition = strpos($homepage, 'class="pricing"');
    $calculationPosition = strpos($homepage, 'class="cta-calc"');
    checkPricing(
        $aboutPosition !== false && $pricingPosition > $aboutPosition && $calculationPosition > $pricingPosition,
        'Homepage pricing must render after the 12-year section and before the calculation form'
    );

    foreach ($prices->plans()->get() as $emptyPlan) {
        $emptyPlan->title = '';
        $emptyPlan->price = '';
        $emptyPlan->save();
    }
    $emptyHomepage = renderPricingPage('/');
    checkPricing(!str_contains($emptyHomepage, 'class="pricing"'), 'Blank pricing rows still render on homepage');
    checkPricing(!str_contains($emptyHomepage, 'https://kv-tyumen.ru/#repair-service'), 'Blank pricing rows still render Service schema');
    checkPricing(!str_contains(renderPricingPage('/repairs'), 'class="pricing"'), 'Blank pricing rows still render on repairs');

    echo "PASS: dedicated prices and homepage Service/Offer schema render from CMS data and hide when empty.\n";
} finally {
    DB::rollBack();
}
