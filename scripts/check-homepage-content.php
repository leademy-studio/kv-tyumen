<?php
// Read-only production check for the homepage editor, data and Media Library files.
// docker compose exec -T app php < scripts/check-homepage-content.php

if (PHP_SAPI !== 'cli') {
    exit(1);
}

require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

\BackendAuth::setUser(\Backend\Models\User::where('is_superuser', 1)->firstOrFail());
$model = \Tailor\Models\GlobalRecord::inGlobal('Site\\MainPage')->firstOrFail();
$controller = new \Tailor\Controllers\Globals();
$form = new \Backend\Widgets\Form($controller, [
    'model' => $model,
    'arrayName' => 'GlobalRecord',
    'context' => 'create',
    'fields' => [],
]);
$form->bindToController();
$renderedForm = $form->render();

if (!str_contains($renderedForm, 'GlobalRecord[hero_title]')) {
    throw new \RuntimeException('Homepage backend form did not render its editable fields.');
}

$expectedFields = [
    'hero_title', 'hero_subtitle', 'hero_glow_right_desktop',
    'service_cards', 'promo_title', 'promo_image',
    'block1_title', 'block1_subtitle', 'block1_image',
    'animation_title', 'animation_images', 'cases_entries',
    'about_title', 'about_description', 'advantages_image',
    'calculation_title', 'seo_text_title', 'seo_text_blocks',
    'faq_title', 'faq_items',
];
foreach ($expectedFields as $name) {
    if (!$form->getField($name)) {
        throw new \RuntimeException('Missing homepage backend field: ' . $name);
    }
}

$mediaFiles = glob(storage_path('app/media/homepage/*')) ?: [];
$blueprint = \Tailor\Classes\BlueprintIndexer::instance()->findGlobalByHandle('Site\\MainPage');
$result = [
    'admin_path' => '/' . config('backend.uri') . '/tailor/globals/' . $blueprint->handleSlug,
    'content_version' => (int) $model->content_version,
    'backend_fields_checked' => count($expectedFields),
    'service_cards' => $model->service_cards()->count(),
    'animation_images' => $model->animation_images()->count(),
    'portfolio_cases' => $model->cases_entries()->count(),
    'seo_blocks' => $model->seo_text_blocks()->count(),
    'faq_items' => $model->faq_items()->count(),
    'homepage_media_files' => count($mediaFiles),
];

if ($result['content_version'] !== 1
    || $result['service_cards'] !== 2
    || $result['animation_images'] !== 12
    || $result['homepage_media_files'] < 25
) {
    throw new \RuntimeException('Homepage initialization is incomplete: ' . json_encode($result));
}

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), "\n";
