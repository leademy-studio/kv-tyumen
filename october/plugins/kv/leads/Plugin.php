<?php namespace KV\Leads;

use Backend;
use System\Classes\PluginBase;

/**
 * Leads Plugin Information File
 *
 * Хранит заявки, отправленные через формы сайта, чтобы можно было
 * считать объём обращений и просматривать историю в админ-панели.
 */
class Plugin extends PluginBase
{
    public function pluginDetails()
    {
        return [
            'name'        => 'Заявки с сайта',
            'description' => 'Сохраняет заявки с форм сайта в базу данных и показывает их в админ-панели.',
            'author'      => 'KV Tyumen',
            'icon'        => 'icon-envelope'
        ];
    }

    public function registerNavigation()
    {
        return [
            'leads' => [
                'label'       => 'Заявки',
                'url'         => Backend::url('kv/leads/leads'),
                'icon'        => 'icon-envelope',
                'permissions' => ['kv.leads.access_leads'],
                'order'       => 500,
            ],
        ];
    }

    public function registerPermissions()
    {
        return [
            'kv.leads.access_leads' => [
                'tab'   => 'Заявки',
                'label' => 'Доступ к заявкам с сайта',
            ],
        ];
    }
}
