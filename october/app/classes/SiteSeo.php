<?php namespace App\Classes;

use Cms\Classes\Theme;
use Tailor\Models\EntryRecord;

class SiteSeo
{
    public static function isIndexable($page): bool
    {
        return !$page->is_hidden && !$page->seo_noindex
            && !in_array($page->url, ['/404', '/500'], true)
            && !SiteUrl::isSystemPath((string) $page->url)
            && !SiteUrl::isFilePath((string) $page->url)
            && !preg_match('~<meta\b[^>]*\b(?:name=["\'](?:robots|googlebot|yandex)["\'][^>]*content=["\'][^"\']*noindex|content=["\'][^"\']*noindex[^>]*name=["\'](?:robots|googlebot|yandex)["\'])~i', $page->markup ?? '');
    }

    public static function publishedEntries(string $section)
    {
        return EntryRecord::inSection($section)
            ->where('is_enabled', 1)
            ->where(fn ($q) => $q->whereNull('published_at')->orWhere('published_at', '<=', now()))
            ->where(fn ($q) => $q->whereNull('expired_at')->orWhere('expired_at', '>=', now()));
    }

    /** Use explicit Tailor binding, or discover a standard [section] component. */
    private static function sectionBinding($page): ?array
    {
        if ($page->sitemap_section) {
            return [(string) $page->sitemap_section, (string) ($page->sitemap_identifier ?: 'slug'),
                (string) ($page->sitemap_parameter ?: 'slug')];
        }
        foreach (($page->settings['components'] ?? []) as $name => $properties) {
            if (explode(' ', $name)[0] !== 'section' || empty($properties['handle'])) {
                continue;
            }
            if (preg_match('/^\s*{{\s*:(\w+)\s*}}\s*$/', $properties['value'] ?? '', $match)) {
                return [$properties['handle'], $properties['identifier'] ?? 'slug', $match[1]];
            }
        }
        return null;
    }

    /** No persistent cache: page CRUD and publication schedules apply on the next request. */
    private static function candidates(): array
    {
        $result = [];
        foreach (Theme::getActiveTheme()->listPages(true) as $page) {
            if (!self::isIndexable($page)) {
                continue;
            }
            $pattern = (string) $page->url;
            $paths = [];
            $dynamic = str_contains($pattern, ':');
            if (!$dynamic) {
                $paths[] = $pattern;
            } elseif ($binding = self::sectionBinding($page)) {
                [$section, $identifier, $parameter] = $binding;
                if (!in_array($identifier, ['slug', 'fullslug', 'id'], true)) {
                    continue;
                }
                foreach (self::publishedEntries($section)->get() as $entry) {
                    $value = (string) $entry->$identifier;
                    if ($value === '' || $entry->seo_noindex) {
                        continue;
                    }
                    $paths[] = preg_replace('~:' . preg_quote($parameter, '~') . '\b~', $value, $pattern);
                }
            }
            foreach ($paths as $path) {
                // Unresolved/optional routes cannot be turned into real URLs without a binding.
                if ($path === '' || preg_match('~[:?*\[\]#]~', $path)) {
                    continue;
                }
                $url = SiteUrl::canonical($path);
                // A non-normalized route would redirect rather than serve this document.
                if ($path !== SiteUrl::pagePath($path)) {
                    continue;
                }
                $result[$url] = [
                    'loc' => $url,
                    'changefreq' => $path === '/policy' ? 'yearly' : ($dynamic ? 'monthly' : 'weekly'),
                    'priority' => $path === '/' ? '1.0' : ($path === '/policy' ? '0.3' : ($dynamic ? '0.6' : '0.8')),
                    'override' => trim((string) $page->canonical_override),
                ];
            }
        }
        ksort($result);
        return $result;
    }

    private static function overrideUrl(string $value): ?string
    {
        if ($value === '') {
            return null;
        }
        $parts = parse_url($value);
        if ($parts === false || isset($parts['user']) || isset($parts['pass'])
            || (isset($parts['host']) && !in_array(strtolower($parts['host']), ['kv-tyumen.ru', 'www.kv-tyumen.ru'], true))
            || (isset($parts['scheme']) && !in_array(strtolower($parts['scheme']), ['http', 'https'], true))) {
            return null;
        }
        return SiteUrl::canonical($parts['path'] ?? '/');
    }

    /** Accept overrides only to another known, indexable, self-canonical CMS route. */
    private static function validOverride(string $value, array $candidates): ?string
    {
        $url = self::overrideUrl($value);
        if (!$url || !isset($candidates[$url])) {
            return null;
        }
        $targetOverride = self::overrideUrl($candidates[$url]['override']);
        return !$targetOverride || $targetOverride === $url ? $url : null;
    }

    public static function canonicalForPage($page): ?string
    {
        if (!self::isIndexable($page)) {
            return null;
        }
        $self = SiteUrl::canonical(request()->getPathInfo());
        $override = trim((string) $page->canonical_override);
        return ($override ? self::validOverride($override, self::candidates()) : null) ?: $self;
    }

    public static function sitemap(): array
    {
        $candidates = self::candidates();
        $result = [];
        foreach ($candidates as $url => $item) {
            $canonical = self::validOverride($item['override'], $candidates) ?: $url;
            if ($canonical !== $url) {
                continue;
            }
            unset($item['override']);
            $result[] = $item;
        }
        return $result;
    }

    public static function sitemapXml(): string
    {
        $xml = new \SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>');
        foreach (self::sitemap() as $item) {
            $node = $xml->addChild('url');
            foreach ($item as $name => $value) {
                $node->addChild($name, htmlspecialchars($value, ENT_XML1, 'UTF-8'));
            }
        }
        return $xml->asXML();
    }
}
