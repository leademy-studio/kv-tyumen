<?php
// Run after tailor:migrate: docker compose exec -T app php < scripts/seed-repairs-steps.php
// One-time import of the existing page text; never replace subsequent CMS edits.
if (PHP_SAPI !== 'cli') {
    exit(1);
}
require getcwd() . '/vendor/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

\Illuminate\Support\Facades\DB::transaction(function () {
    $services = \Tailor\Models\GlobalRecord::inGlobal('Site\\Services')->lockForUpdate()->firstOrFail();
    if (array_key_exists('cr_steps_title', $services->content) || $services->cr_steps()->exists()) {
        echo "Steps already initialized; CMS content preserved.\n";
        return;
    }
    $steps = json_decode(<<<'JSON'
[
  {
    "step_title": "Выбор пакета",
    "description": "Выбираете подходящий тариф — Стандарт, Премиум или индивидуальный."
  },
  {
    "step_title": "Переговоры в офисе",
    "description": "Обсуждаем детали, показываем материалы и проекты, отвечаем на вопросы."
  },
  {
    "step_title": "Экскурсия на объекты",
    "description": "Показываем наши работы вживую — в процессе и после сдачи."
  },
  {
    "step_title": "Подписание договора",
    "description": "Фиксируем сроки, объём работ и финальную стоимость."
  },
  {
    "step_title": "Встреча на объекте с прорабом",
    "description": "Совместно с мастером уточняем расположение розеток, выключателей, световых сценариев."
  },
  {
    "step_title": "Закупка всех материалов",
    "description": "Мы подбираем и закупаем черновые и чистовые материалы — вы только утверждаете."
  },
  {
    "step_title": "Фото- и видеоотчёты на этапах",
    "description": "Вы всегда в курсе, что происходит на объекте — без необходимости постоянно присутствовать"
  }
]
JSON, true, 512, JSON_THROW_ON_ERROR);
    $before = $services->content;
    $services->cr_steps_title = 'Как мы работаем';
    $services->cr_steps_cta_label = 'Оставить заявку';
    $services->cr_steps_background = null;
    $services->save();
    foreach ($steps as $index => $step) {
        $services->cr_steps()->create($step + ['sort_order' => $index + 1]);
    }
    $fresh = \Tailor\Models\GlobalRecord::findForGlobal('Site\\Services');
    foreach ($before as $key => $value) {
        if (($fresh->content[$key] ?? null) !== $value) {
            throw new \RuntimeException('Unexpected change to existing services content: ' . $key);
        }
    }
    if ($fresh->cr_steps()->count() !== count($steps)) {
        throw new \RuntimeException('Step count verification failed');
    }
    if ($fresh->cr_steps->pluck('step_title')->all() !== array_column($steps, 'step_title')) {
        throw new \RuntimeException('Step order verification failed');
    }
    echo "Imported 7 steps; other services content preserved.\n";
});
