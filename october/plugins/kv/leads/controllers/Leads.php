<?php namespace KV\Leads\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

/**
 * Leads Backend Controller — список и просмотр заявок с сайта.
 */
class Leads extends Controller
{
    public $implement = [
        \Backend\Behaviors\ListController::class,
        \Backend\Behaviors\FormController::class,
    ];

    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public $requiredPermissions = ['kv.leads.access_leads'];

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('KV.Leads', 'leads');
    }
}
