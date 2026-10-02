<?php namespace App;

use System\Classes\AppBase;

/**
 * Provider is an application level plugin, all registration methods are supported.
 */
class Provider extends AppBase
{
    /**
     * register method, called when the app is first registered.
     *
     * @return void
     */
    public function register()
    {
        parent::register();
    }

    public function registerMarkupTags()
    {
        return ['filters' => ['optimized_media' => [\App\Classes\ImagePipeline::class, 'mediaUrl', false]]];
    }

    /**
     * boot method, called right before the request route.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        $this->app->singleton('system.resizer', \App\Classes\OptimizedResizeImages::class);
        $this->app->make(\Illuminate\Contracts\Http\Kernel::class)
            ->prependMiddleware(\App\Classes\ImageRequestTiming::class);

        \Media\FormWidgets\MediaFinder::extend(function ($widget) {
            $widget->addJs('/app/assets/js/image-previews.js');
        });
        \Event::listen('backend.page.beforeDisplay', function ($controller) {
            $controller->addJs('/app/assets/js/image-previews.js');
        });
        \Event::listen('backend.ajax.beforeRunHandler', [\App\Classes\ImageBackend::class, 'handle']);
        \Event::listen('media.file.upload', function ($widget, $path) {
            try {
                app(\App\Classes\ImagePipeline::class)->warm($path);
            } catch (\Throwable $e) {
                // The original was saved successfully; a queue outage must not claim upload failure.
                \Log::channel('images')->error('image.enqueue_failed', ['error' => $e->getMessage()]);
            }
        });

        $this->app->make(\Illuminate\Contracts\Http\Kernel::class)
            ->prependMiddleware(\App\Classes\NormalizePublicUrl::class);

        \Event::listen('cms.template.extendTemplateSettingsFields', function ($extension, $data) {
            if ($data->templateType !== 'page') {
                return;
            }
            $data->settings[] = [
                'property' => 'canonical_override', 'type' => 'string',
                'title' => 'Canonical (необязательно)', 'tab' => 'SEO',
                'description' => 'По умолчанию — адрес самой страницы. Укажите путь или URL другой индексируемой страницы сайта. Недоступный адрес будет проигнорирован.',
            ];
            $data->settings[] = [
                'property' => 'seo_noindex', 'type' => 'checkbox', 'tab' => 'SEO',
                'title' => 'Запретить индексацию',
                'description' => 'Добавляет noindex и исключает страницу из sitemap.xml.',
            ];
        });
    }
}
