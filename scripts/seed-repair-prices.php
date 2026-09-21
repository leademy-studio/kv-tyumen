<?php
// One-time migration from Site\Services tariff fields to Site\RepairPrices.
// Existing values in the new entity are never overwritten.
// docker compose exec -T --user www-data app php /tmp/seed-repair-prices.php /tmp/repair-prices.json

if (PHP_SAPI !== 'cli') {
    exit(1);
}

require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$defaults = json_decode(
    file_get_contents($argv[1] ?? __DIR__ . '/data/repair-prices.json'),
    true,
    512,
    JSON_THROW_ON_ERROR
);

// A brand-new global has no row until it is opened or explicitly initialized.
\Tailor\Models\GlobalRecord::findForGlobal('Site\\RepairPrices');

$result = \Illuminate\Support\Facades\DB::transaction(function () use ($defaults) {
    $source = \Tailor\Models\GlobalRecord::inGlobal('Site\\Services')->lockForUpdate()->firstOrFail();
    $prices = \Tailor\Models\GlobalRecord::inGlobal('Site\\RepairPrices')->lockForUpdate()->firstOrFail();

    if ((int) ($prices->content['content_version'] ?? 0) >= 1 || $prices->plans()->exists()) {
        return ['status' => 'already_initialized', 'plans' => $prices->plans()->count()];
    }

    foreach (['section_title', 'subtitle_left', 'subtitle_right', 'button_label', 'button_url'] as $field) {
        $prices->$field = $defaults[$field];
    }

    $sourceContent = $source->content;
    foreach ($defaults['plans'] as $index => $defaultPlan) {
        $prefix = $defaultPlan['source_prefix'];
        $plan = [
            'title' => ($sourceContent[$prefix . '_title'] ?? null) ?: $defaultPlan['title'],
            'price' => ($sourceContent[$prefix . '_price'] ?? null) ?: $defaultPlan['price'],
            'features_left' => ($sourceContent[$prefix . '_list_left'] ?? null) ?: $defaultPlan['features_left'],
            'features_right' => ($sourceContent[$prefix . '_list_right'] ?? null) ?: $defaultPlan['features_right'],
            'is_accent' => $defaultPlan['is_accent'],
            'sort_order' => $index + 1,
        ];
        $prices->plans()->create($plan);
    }

    $prices->content_version = 1;
    $prices->save();

    $fresh = \Tailor\Models\GlobalRecord::findForGlobal('Site\\RepairPrices');
    $actual = $fresh->plans()->orderBy('sort_order')->get()->map->only(['title', 'price'])->all();
    $expected = [];
    foreach ($defaults['plans'] as $defaultPlan) {
        $prefix = $defaultPlan['source_prefix'];
        $expected[] = [
            'title' => ($sourceContent[$prefix . '_title'] ?? null) ?: $defaultPlan['title'],
            'price' => ($sourceContent[$prefix . '_price'] ?? null) ?: $defaultPlan['price'],
        ];
    }
    if ($actual !== $expected) {
        throw new \RuntimeException('Repair price migration verification failed.');
    }

    return [
        'status' => 'initialized',
        'plans' => count($actual),
        'source' => 'Site\\Services',
        'source_content_preserved' => true,
    ];
});

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), "\n";
