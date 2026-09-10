<?php namespace App\Classes;

/** Shared public URL policy. Query strings and file names are never lowercased. */
class SiteUrl
{
    public const ORIGIN = 'https://kv-tyumen.ru';

    public static function isSystemPath(string $path): bool
    {
        $prefixes = ['backend', trim((string) config('backend.uri', 'admin'), '/'),
            'admin', 'api', 'combine', 'themes', 'modules', 'plugins', 'vendor',
            'storage', 'updates', 'temp', 'config'];
        $first = strtolower(explode('/', ltrim(rawurldecode($path), '/'))[0]);
        return in_array($first, $prefixes, true);
    }

    public static function isFilePath(string $path): bool
    {
        return (bool) preg_match('~\.[^/]+$~u', rtrim(rawurldecode($path), '/'));
    }

    public static function pagePath(string $path): string
    {
        $path = preg_replace('~/+~', '/', $path);
        // Normalize each segment, without interpreting encoded slashes as separators.
        $segments = array_map(function ($segment) {
            return rawurlencode(mb_strtolower(rawurldecode($segment), 'UTF-8'));
        }, explode('/', $path));
        return '/' . trim(implode('/', $segments), '/');
    }

    public static function canonical(string $path): string
    {
        return self::ORIGIN . self::pagePath(explode('?', explode('#', $path, 2)[0], 2)[0]);
    }
}
