<?php namespace App\Classes;

class ImageRequestTiming
{
    public function handle($request, \Closure $next)
    {
        $start = microtime(true);
        $response = $next($request);
        if ($request->is('admin/*', 'resize/*', 'image-preview/*')) {
            $ms = round((microtime(true) - $start) * 1000, 1);
            $response->headers->set('Server-Timing', 'app;dur=' . $ms);
            \Log::channel('images')->info('image.request', ['method' => $request->method(), 'path' => $request->path(),
                'handler' => $request->header('X-AJAX-HANDLER', $request->header('X-OCTOBER-REQUEST-HANDLER')), 'ms' => $ms, 'status' => $response->getStatusCode()]);
        }
        return $response;
    }
}
