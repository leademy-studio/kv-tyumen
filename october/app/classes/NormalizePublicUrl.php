<?php namespace App\Classes;

use Closure;
use Illuminate\Http\Request;

class NormalizePublicUrl
{
    public function handle(Request $request, Closure $next)
    {
        // Never redirect POSTs or October AJAX handlers: method and payload must survive.
        if (!in_array($request->method(), ['GET', 'HEAD'], true)
            || $request->ajax() || $request->headers->has('X-OCTOBER-REQUEST-HANDLER')) {
            return $next($request);
        }

        [$path, $query] = array_pad(explode('?', $request->server('REQUEST_URI', '/'), 2), 2, null);
        $target = $path;
        if ($path === '/sitemap-store.xml') {
            $target = '/sitemap.xml';
        } elseif (!SiteUrl::isSystemPath($path) && !SiteUrl::isFilePath($path)) {
            $target = SiteUrl::pagePath($path);
        }

        $publicHost = in_array(strtolower($request->getHost()), ['kv-tyumen.ru', 'www.kv-tyumen.ru'], true);
        $scheme = strtolower($request->header('X-Forwarded-Proto', $request->getScheme()));
        $mirror = $publicHost && ($request->getHost() !== 'kv-tyumen.ru' || $scheme !== 'https');
        if ($mirror || $target !== $path) {
            $origin = $publicHost ? SiteUrl::ORIGIN : $request->getSchemeAndHttpHost();
            return redirect($origin . $target . ($query !== null ? '?' . $query : ''), 301);
        }

        $response = $next($request);
        if ($response->getStatusCode() >= 400) {
            $response->headers->set('X-Robots-Tag', 'noindex');
        }
        return $response;
    }
}
