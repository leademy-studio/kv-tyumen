<?php
// One-time import of the existing template content; preserve later CMS edits and deletions.
// docker compose exec -T app php /tmp/seed-repairs-seo-faq.php /tmp/repairs-seo-faq.json
if (PHP_SAPI !== 'cli') { exit(1); }
require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();
$data = json_decode(file_get_contents($argv[1] ?? __DIR__.'/data/repairs-seo-faq.json'), true, 512, JSON_THROW_ON_ERROR);
\Illuminate\Support\Facades\DB::transaction(function () use ($data) {
    $services = \Tailor\Models\GlobalRecord::inGlobal('Site\\Services')->lockForUpdate()->firstOrFail();
    $before = $services->content;
    $imported = [];
    foreach (['cr_seo_title' => 'cr_seo_blocks', 'cr_faq_title' => 'cr_faq'] as $title => $relation) {
        if (array_key_exists($title, $before) || $services->$relation()->exists()) {
            continue;
        }
        $services->$title = $data[$title];
        foreach ($data[$relation] as $index => $item) {
            $services->$relation()->create($item + ['sort_order' => $index + 1]);
        }
        $imported[$relation] = count($data[$relation]);
    }
    if (!$imported) {
        echo "Already initialized; CMS edits and deletions preserved.\n";
        return;
    }
    $services->save();
    $fresh = \Tailor\Models\GlobalRecord::findForGlobal('Site\\Services');
    foreach ($before as $key => $value) {
        if (($fresh->content[$key] ?? null) !== $value) {
            throw new \RuntimeException('Unexpected change to existing content: ' . $key);
        }
    }
    foreach ($imported as $relation => $count) {
        $fields = array_keys($data[$relation][0]);
        $actual = $fresh->$relation()->orderBy('sort_order')->get()->map(function ($item) use ($fields) {
            return array_intersect_key($item->toArray(), array_flip($fields));
        })->all();
        if ($actual !== $data[$relation]) {
            throw new \RuntimeException('Imported content verification failed: ' . $relation);
        }
    }
    echo json_encode(['imported' => $imported, 'existing_content' => 'preserved'], JSON_UNESCAPED_UNICODE), "\n";
});
