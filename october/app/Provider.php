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

    /**
     * boot method, called right before the request route.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

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
