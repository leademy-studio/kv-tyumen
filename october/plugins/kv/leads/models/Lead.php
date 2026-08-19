<?php namespace KV\Leads\Models;

use Model;

/**
 * Lead Model — заявка, отправленная через форму сайта.
 */
class Lead extends Model
{
    use \October\Rain\Database\Traits\Validation;

    public $table = 'kv_leads_leads';

    public $timestamps = true;

    protected $guarded = ['*'];

    protected $fillable = [
        'name',
        'phone',
        'host',
        'page_url',
        'telegram_sent',
        'max_sent',
        'ip',
        'user_agent',
    ];

    protected $casts = [
        'telegram_sent' => 'boolean',
        'max_sent'      => 'boolean',
    ];

    public $rules = [
        'name'  => 'required|max:100',
        'phone' => 'required|max:30',
    ];
}
