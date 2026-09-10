<?php
// Read-only check of the actual October backend form renderer and loaded CMS content.
// docker compose exec -T app php < scripts/check-repairs-seo-faq.php
if (PHP_SAPI !== 'cli') { exit(1); }
require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();
// In-memory identity for rendering permitted fields; no login/session or user update.
\BackendAuth::setUser(\Backend\Models\User::where('is_superuser', 1)->firstOrFail());
$model = \Tailor\Models\GlobalRecord::inGlobal('Site\\Services')->firstOrFail();
$controller = new \Tailor\Controllers\Globals;
$form = new \Backend\Widgets\Form($controller, [
    'model' => $model, 'arrayName' => 'GlobalRecord', 'context' => 'create', 'fields' => [],
]);
$form->bindToController();
$html = $form->renderTab('SEO-текст и FAQ');
$result = [];
foreach (['cr_seo_title', 'cr_seo_blocks', 'cr_faq_title', 'cr_faq'] as $name) {
    $field = $form->getField($name);
    if (!$field || $field->tab !== 'SEO-текст и FAQ' || !str_contains($html, $name)) {
        throw new RuntimeException('Missing rendered backend field: ' . $name);
    }
    $result[$name] = ['tab' => $field->tab, 'type' => $field->type, 'rendered' => true];
}
$blueprint = \Tailor\Classes\BlueprintIndexer::instance()->findGlobalByHandle('Site\\Services');
echo json_encode(['admin_path' => '/' . config('backend.uri') . '/tailor/globals/' . $blueprint->handleSlug,
    'fields' => $result, 'seo_blocks' => $model->cr_seo_blocks()->count(),
    'faq_items' => $model->cr_faq()->count()], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), "\n";
