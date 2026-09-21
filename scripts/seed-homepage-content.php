<?php
// One-time migration of homepage literals to the Site\MainPage global record.
// Existing non-empty CMS values and selected portfolio cases are preserved.
// docker compose exec -T app php /tmp/seed-homepage-content.php /tmp/homepage-content.json

if (PHP_SAPI !== 'cli') {
    exit(1);
}

require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$dataPath = $argv[1] ?? __DIR__ . '/data/homepage-content.json';
$data = json_decode(file_get_contents($dataPath), true, 512, JSON_THROW_ON_ERROR);
$mediaDirectory = storage_path('app/media/homepage');
\Illuminate\Support\Facades\File::ensureDirectoryExists($mediaDirectory, 0775, true);

$copiedMedia = [];
$preservedMedia = [];
foreach ($data['media'] as $filename) {
    $source = base_path('themes/kv-vopros/assets/homepage/img/' . $filename);
    $destination = $mediaDirectory . '/' . $filename;
    if (!is_file($source)) {
        throw new \RuntimeException('Homepage media source is missing: ' . $filename);
    }
    if (is_file($destination)) {
        $preservedMedia[] = $filename;
        continue;
    }
    if (!copy($source, $destination)) {
        throw new \RuntimeException('Unable to copy homepage media: ' . $filename);
    }
    $copiedMedia[] = $filename;
}

$result = \Illuminate\Support\Facades\DB::transaction(function () use ($data) {
    $page = \Tailor\Models\GlobalRecord::inGlobal('Site\\MainPage')->lockForUpdate()->firstOrFail();
    $before = $page->content;
    $caseIds = $page->cases_entries()->pluck('id')->all();

    if ((int) ($before['content_version'] ?? 0) >= 1) {
        return [
            'status' => 'already_initialized',
            'fields_imported' => 0,
            'repeaters_imported' => [],
            'cases_preserved' => count($caseIds),
        ];
    }

    $fieldsImported = 0;
    foreach ($data['content'] as $name => $value) {
        if (array_key_exists($name, $before) && $before[$name] !== '' && $before[$name] !== null) {
            continue;
        }
        $page->$name = $value;
        $fieldsImported++;
    }

    $repeatersImported = [];
    foreach ($data['repeaters'] as $relation => $items) {
        if ($page->$relation()->exists()) {
            continue;
        }
        foreach ($items as $index => $item) {
            $page->$relation()->create($item + ['sort_order' => $index + 1]);
        }
        $repeatersImported[$relation] = count($items);
    }

    $page->content_version = 1;
    $page->save();

    $fresh = \Tailor\Models\GlobalRecord::findForGlobal('Site\\MainPage');
    foreach ($before as $key => $value) {
        if ($value !== '' && $value !== null && ($fresh->content[$key] ?? null) !== $value) {
            throw new \RuntimeException('Unexpected change to existing homepage content: ' . $key);
        }
    }
    if ($fresh->cases_entries()->pluck('id')->all() !== $caseIds) {
        throw new \RuntimeException('Selected portfolio cases changed during homepage initialization.');
    }
    foreach ($repeatersImported as $relation => $count) {
        if ($fresh->$relation()->count() !== $count) {
            throw new \RuntimeException('Homepage repeater verification failed: ' . $relation);
        }
    }

    return [
        'status' => 'initialized',
        'fields_imported' => $fieldsImported,
        'repeaters_imported' => $repeatersImported,
        'cases_preserved' => count($caseIds),
    ];
});

$result['media_copied'] = count($copiedMedia);
$result['media_preserved'] = count($preservedMedia);
echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), "\n";
