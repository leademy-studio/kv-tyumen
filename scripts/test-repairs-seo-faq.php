<?php
// Local-only integration test; every data change is rolled back.
// docker compose exec -T -e KV_REPAIRS_LOCAL_TEST=1 app php < scripts/test-repairs-seo-faq.php
if (PHP_SAPI !== 'cli' || getenv('KV_REPAIRS_LOCAL_TEST') !== '1') { exit(1); }
require getcwd().'/vendor/autoload.php';
$app = require getcwd().'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();
use Illuminate\Support\Facades\DB;
use Tailor\Models\GlobalRecord;
function renderRepairs() {
    $result = (new \Cms\Classes\Controller)->run('/repairs');
    return is_string($result) ? $result : $result->getContent();
}
function check($ok, $message) { if (!$ok) { throw new RuntimeException($message); } }
DB::beginTransaction();
try {
    $services = GlobalRecord::inGlobal('Site\\Services')->firstOrFail();
    $faq = $services->cr_faq()->firstOrFail();
    $faq->question = 'Проверка редактирования FAQ';
    $faq->answer = 'Текст </script><script>проверка</script> & кавычки "ответ"';
    $faq->save();
    $block = $services->cr_seo_blocks()->firstOrFail();
    $block->block_text = 'Проверка редактирования SEO-текста';
    $block->save();
    $html = renderRepairs();
    check(str_contains($html, 'Проверка редактирования SEO-текста'), 'Edited SEO text is rendered');
    check(str_contains($html, 'Проверка редактирования FAQ'), 'Edited FAQ question is rendered');
    check(!str_contains($html, '</script><script>проверка'), 'JSON-LD cannot close its script element');
    preg_match_all('~<script type="application/ld\+json">(.*?)</script>~s', $html, $matches);
    $schemas = array_map(fn ($json) => json_decode($json, true, 512, JSON_THROW_ON_ERROR), $matches[1]);
    $faqs = array_values(array_filter($schemas, fn ($schema) => ($schema['@type'] ?? '') === 'FAQPage'));
    check(count($faqs) === 1 && $faqs[0]['mainEntity'][0]['acceptedAnswer']['text'] === $faq->answer, 'Edited answer matches FAQ structured data');
    $services->cr_faq()->delete();
    $services->cr_seo_blocks()->delete();
    $html = renderRepairs();
    check(!str_contains($html, 'class="faq"') && !str_contains($html, '"FAQPage"'), 'Deleting FAQ removes section and structured data');
    check(!str_contains($html, 'class="seo-text"'), 'Deleting SEO blocks removes section without fallback text');
    echo "PASS: CMS edits reach page and JSON-LD; deleted content stays absent; script text is escaped.\n";
} finally { DB::rollBack(); }
