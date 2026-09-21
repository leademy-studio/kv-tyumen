<?php
// Read-only check for the dedicated repair pricing entity and backend form.
// docker compose exec -T --user www-data app php < scripts/check-repair-prices.php

if (PHP_SAPI !== 'cli') {
    exit(1);
}

require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

\BackendAuth::setUser(\Backend\Models\User::where('is_superuser', 1)->firstOrFail());
$model = \Tailor\Models\GlobalRecord::inGlobal('Site\\RepairPrices')->firstOrFail();
$controller = new \Tailor\Controllers\Globals();
$form = new \Backend\Widgets\Form($controller, [
    'model' => $model,
    'arrayName' => 'GlobalRecord',
    'context' => 'create',
    'fields' => [],
]);
$form->bindToController();

foreach (['section_title', 'subtitle_left', 'subtitle_right', 'button_label', 'button_url', 'plans'] as $name) {
    if (!$form->getField($name)) {
        throw new \RuntimeException('Missing repair pricing backend field: ' . $name);
    }
}

$plans = $model->plans()->orderBy('sort_order')->get();
$prices = $plans->mapWithKeys(fn ($plan) => [$plan->title => $plan->price])->all();
$expected = [
    'Стандарт' => '29 000 ₽ / м²',
    'Стандарт+' => '35 000 ₽ / м²',
    'Премиум' => '45 000 ₽ / м²',
    'От шефа' => '60 000 ₽ / м²',
];
if ($prices !== $expected || $plans->where('is_accent', true)->pluck('title')->all() !== ['Премиум']) {
    throw new \RuntimeException('Repair pricing content differs from the migrated production values.');
}

$blueprint = \Tailor\Classes\BlueprintIndexer::instance()->findGlobalByHandle('Site\\RepairPrices');
echo json_encode([
    'admin_path' => '/' . config('backend.uri') . '/tailor/globals/' . $blueprint->handleSlug,
    'content_version' => (int) $model->content_version,
    'plans' => $plans->count(),
    'prices' => $prices,
    'accent_plan' => 'Премиум',
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), "\n";
