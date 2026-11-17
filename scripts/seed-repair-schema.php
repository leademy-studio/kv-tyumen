<?php
// One-time schema metadata from the approved 17.11.2026 brief. No visible content is changed.
// cd october && php ../scripts/seed-repair-schema.php
if (PHP_SAPI !== 'cli') { exit(1); }
require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

\DB::transaction(function () {
    $items = [
        [\Tailor\Models\GlobalRecord::inGlobal('Site\\MainPage')->lockForUpdate()->firstOrFail(), '', [
            'service_name' => 'Ремонт квартир под ключ в Тюмени',
            'service_type' => 'Ремонт квартир под ключ',
            'service_description' => 'Ремонт квартир под ключ в Тюмени: дизайн-проект, подбор и доставка материалов, черновые и чистовые работы, контроль качества и сдача квартиры.',
        ]],
        [\Tailor\Models\GlobalRecord::inGlobal('Site\\Services')->lockForUpdate()->firstOrFail(), 'cr_', [
            'service_name' => 'Комплексный ремонт квартир в Тюмени',
            'service_type' => 'Комплексный ремонт квартир по готовым пакетам',
            'service_description' => 'Готовые варианты комплексного ремонта квартир в Тюмени с работами и материалами. Выбор комплектации, согласование сметы и выполнение ремонта.',
        ]],
    ];
    $entry = \App\Classes\SiteSeo::publishedEntries('Site\\RepairPage')
        ->where('slug', 'remont-odnokomnatnoy-kvartiry')->lockForUpdate()->firstOrFail();
    $items[] = [$entry, '', [
        'service_name' => 'Ремонт однокомнатной квартиры в Тюмени',
        'service_type' => 'Ремонт однокомнатной квартиры',
        // Keep changing tariff prices in OfferCatalog, rather than duplicating a static price here.
        'service_description' => 'Ремонт однокомнатной квартиры в Тюмени: готовые пакеты отделки, работы и материалы, доставка и уборка.',
    ]];
    $imported = 0;
    foreach ($items as [$model, $prefix, $fields]) {
        $before = $model->content;
        $changed = false;
        foreach ($fields as $key => $value) {
            $field = $prefix . $key;
            // An intentional CMS deletion/empty value must survive subsequent runs.
            if (!array_key_exists($field, $before)) {
                $model->$field = $value;
                $changed = true;
                $imported++;
            }
        }
        if ($changed) {
            $model->save();
            $model->refresh();
            foreach ($before as $key => $value) {
                if (($model->content[$key] ?? null) !== $value) {
                    throw new RuntimeException('Existing content changed: ' . $key);
                }
            }
        }
    }
    echo json_encode(['imported_fields' => $imported, 'existing_content' => 'preserved']), "\n";
});
