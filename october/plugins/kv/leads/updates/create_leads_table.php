<?php namespace KV\Leads\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateLeadsTable extends Migration
{
    public function up()
    {
        Schema::create('kv_leads_leads', function ($table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->string('phone', 30);
            $table->string('host')->nullable();
            $table->text('page_url')->nullable();
            $table->boolean('telegram_sent')->default(false);
            $table->boolean('max_sent')->default(false);
            $table->string('ip', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamps();

            $table->index('created_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('kv_leads_leads');
    }
}
