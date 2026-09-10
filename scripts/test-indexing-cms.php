<?php
// Local integration test only. All database mutations are rolled back.
// docker compose exec -T -e KV_INDEXING_LOCAL_TEST=1 app php < scripts/test-indexing-cms.php
if (PHP_SAPI !== 'cli' || getenv('KV_INDEXING_LOCAL_TEST') !== '1') {
    fwrite(STDERR, "Run explicitly against the local Docker application only.\n");
    exit(1);
}
require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Classes\SiteSeo;
use App\Classes\SiteUrl;
use Cms\Classes\Page;
use Cms\Classes\Theme;
use Illuminate\Support\Facades\DB;

function expect($condition, $message) {
    if (!$condition) {
        throw new RuntimeException($message);
    }
}
function urls() { return array_column(SiteSeo::sitemap(), 'loc'); }

$theme = Theme::getActiveTheme();
$file = $theme->getPath() . '/pages/seo-integration-fixture.htm';
expect(!file_exists($file), 'Fixture path must be unused');
$initial = urls();
$write = function ($settings = '', $url = '/seo-integration-fixture', $markup = '') use ($file, $theme) {
    file_put_contents($file, "title = \"SEO test\"\nurl = \"$url\"\nlayout = \"default\"\n$settings\n==\n$markup\n");
    // Use a fresh Page instance, matching sitemap's uncached page enumeration.
    return Page::load($theme, 'seo-integration-fixture');
};
try {
    $write();
    expect(in_array(SiteUrl::ORIGIN . '/seo-integration-fixture', urls()), 'Created CMS page appears immediately');
    $write('', '/seo-integration-renamed');
    expect(in_array(SiteUrl::ORIGIN . '/seo-integration-renamed', urls()), 'Updated URL appears immediately');
    expect(!in_array(SiteUrl::ORIGIN . '/seo-integration-fixture', urls()), 'Old URL disappears immediately');
    $page = $write('seo_noindex = 1');
    expect(urls() === $initial, 'Noindex page is excluded');
    expect(SiteSeo::canonicalForPage($page) === null, 'No canonical on noindex page');
    $write('is_hidden = 1');
    expect(urls() === $initial, 'Hidden CMS page is excluded');
    $write('', '/seo-integration-fixture', '<meta name="robots" content="noindex, follow">');
    expect(urls() === $initial, 'Existing meta robots noindex is respected');
    $app->instance('request', \Illuminate\Http\Request::create('https://kv-tyumen.ru/seo-integration-fixture?utm_source=TeSt'));
    $page = $write('canonical_override = "http://www.kv-tyumen.ru/PORTFOLIO/?utm_source=Test#top"');
    expect(SiteSeo::canonicalForPage($page) === SiteUrl::ORIGIN . '/portfolio', 'Valid override normalizes to canonical target');
    expect(urls() === $initial, 'Non-self canonical page is excluded');
    $page->fill(['settings' => array_merge($page->getSettingsAttribute(), ['canonical_override' => '/contacts'])]);
    $page->save();
    $page = Page::load($theme, 'seo-integration-fixture');
    expect($page->canonical_override === '/contacts', 'Editor settings persist on save');
    expect(SiteSeo::canonicalForPage($page) === SiteUrl::ORIGIN . '/contacts', 'Saved canonical override is applied');
    foreach (['/404', '/missing-seo-target', 'https://example.org/portfolio', 'javascript:alert(1)'] as $override) {
        $page = $write('canonical_override = "' . $override . '"');
        expect(SiteSeo::canonicalForPage($page) === SiteUrl::ORIGIN . '/seo-integration-fixture', 'Invalid override falls back to self: ' . $override);
    }
    $write('', '/portfolio');
    expect(count(urls()) === count($initial), 'Duplicate routes are deduplicated');
    $write("[section article]\nhandle = \"Site\\\\CaseStudy\"\nidentifier = \"slug\"\nvalue = \"{{ :slug }}\"", '/seo-integration-blog/:slug');
    expect(in_array(SiteUrl::ORIGIN . '/seo-integration-blog/paderino', urls()), 'Standard Tailor section routes are discovered');
    unlink($file);
    expect(urls() === $initial, 'Deleted CMS page disappears immediately');

    DB::beginTransaction();
    $record = SiteSeo::publishedEntries('Site\\CaseStudy')->where('slug', 'paderino')->firstOrFail();
    $table = $record->getTable();
    $key = $record->getKey();
    $update = fn ($values) => DB::table($table)->where('id', $key)->update($values);
    foreach ([['is_enabled' => 0], ['published_at' => now()->addDay()], ['expired_at' => now()->subDay()], ['draft_mode' => 3], ['deleted_at' => now()]] as $state) {
        $update(array_merge(['is_enabled' => 1, 'published_at' => null, 'expired_at' => null, 'draft_mode' => 1, 'deleted_at' => null], $state));
        expect(!in_array(SiteUrl::ORIGIN . '/portfolio/paderino', urls()), 'Non-public Tailor record excluded: ' . json_encode($state));
        expect(!SiteSeo::publishedEntries('Site\\CaseStudy')->where('slug', 'paderino')->exists(), 'Page query and sitemap agree');
    }
    $update(['is_enabled' => 1, 'published_at' => null, 'expired_at' => null, 'draft_mode' => 1, 'deleted_at' => null, 'slug' => 'seo-integration-renamed']);
    expect(in_array(SiteUrl::ORIGIN . '/portfolio/seo-integration-renamed', urls()), 'Tailor slug changes automatically');
    expect(!in_array(SiteUrl::ORIGIN . '/portfolio/paderino', urls()), 'Old Tailor slug disappears');
    DB::rollBack();
    expect(urls() === $initial, 'Original database content restored');
    $holder = (object) ['templateType' => 'page', 'settings' => []];
    \Event::fire('cms.template.extendTemplateSettingsFields', [null, $holder]);
    expect(array_column($holder->settings, 'property') === ['canonical_override', 'seo_noindex'], 'CMS editor exposes SEO controls');
    $middleware = new \App\Classes\NormalizePublicUrl;
    foreach (['POST', 'PUT', 'PATCH', 'DELETE'] as $method) {
        $request = \Illuminate\Http\Request::create('http://www.kv-tyumen.ru/PORTFOLIO/', $method);
        $response = $middleware->handle($request, fn () => response('untouched', 200));
        expect($response->getStatusCode() === 200 && $response->getContent() === 'untouched', 'Mutation requests are not redirected');
    }
    echo "PASS: CMS page CRUD, noindex, canonical overrides, Tailor routes/status/slug changes, deduplication, editor controls.\n";
} finally {
    if (file_exists($file)) { unlink($file); }
    if (DB::transactionLevel()) { DB::rollBack(); }
}
