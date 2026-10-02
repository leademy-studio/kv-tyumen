<?php namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use App\Classes\ImagePipeline;
use Cache;
use Log;

class PrepareImage implements ShouldQueue
{
    public $tries = 3;
    public $timeout = 120;
    public $backoff = [5, 15];

    public function __construct(public array $spec, public string $lockOwner) {}

    public function handle(): void
    {
        app(ImagePipeline::class)->render($this->spec);
        Cache::forget('kv.image.failed.' . $this->spec['key']);
        $this->releaseLock();
    }

    public function failed(?\Throwable $exception): void
    {
        Cache::put('kv.image.failed.' . $this->spec['key'], true, 300);
        $this->releaseLock();
        Log::channel('images')->error('image.failed', ['key' => $this->spec['key'], 'error' => $exception?->getMessage()]);
    }

    private function releaseLock(): void
    {
        Cache::store('file')->restoreLock('kv.image.queued.' . $this->spec['key'], $this->lockOwner)->release();
    }
}
