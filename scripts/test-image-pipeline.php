<?php
// Run only against an isolated application/database copy.
if (PHP_SAPI !== 'cli' || getenv('DB_DATABASE') !== 'kv_image_test_20261002') exit(1);
require getcwd() . '/bootstrap/autoload.php';
$app = require getcwd() . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
function checkImage($ok, $message) { if (!$ok) throw new RuntimeException($message); echo "PASS $message\n"; }
$p = app(App\Classes\ImagePipeline::class);
$source = storage_path('app/media/test-pipeline-' . bin2hex(random_bytes(6)) . '.jpg');
copy(storage_path('app/media/portfolio/repairs/prichalnaia/5.jpg'), $source);
$hash = hash_file('sha256', $source);
$spec = $p->describe($source, 190, 190, ['mode'=>'cover']);
checkImage($spec !== null, 'local media image accepted');
checkImage($p->describe('/etc/passwd') === null, 'outside-media paths rejected');
$count = DB::table('jobs')->where('queue','images')->count();
for($i=0;$i<9;$i++) $p->url($spec);
checkImage(DB::table('jobs')->where('queue','images')->count() === $count+1, 'nine duplicate requests enqueue one job');
checkImage($p->response($spec['key'])->getStatusCode() === 202, 'pending request returns immediately');
$start=microtime(true);
Artisan::call('queue:work', ['connection'=>'images','--queue'=>'images','--stop-when-empty'=>true,'--tries'=>1]);
checkImage(is_file($p->path($spec)), 'real queue worker created thumbnail');
$size=getimagesize($p->path($spec));
checkImage($size[0]===190 && $size[1]===190, 'thumbnail dimensions correct');
$work=$p->workingCopy($spec);$size=getimagesize($work);
checkImage(max($size[0],$size[1])===2560, 'working copy limited to 2560 pixels');
checkImage(hash_file('sha256',$source)===$hash, 'original bytes unchanged');
$before=filemtime($p->path($spec)); $p->render($spec);
checkImage(filemtime($p->path($spec))===$before, 'cached thumbnail not regenerated');
checkImage($p->response($spec['key'])->getStatusCode()===200, 'ready response resolves to static file');
// Same filename, same byte size and same timestamp: content hash must invalidate.
$fixture=storage_path('app/media/replacement-test.jpg');copy($source,$fixture);
$a=$p->describe($fixture,190,190,['mode'=>'cover']);$mtime=filemtime($fixture);
$bytes=file_get_contents($fixture);$bytes[strlen($bytes)-1]=chr(ord($bytes[strlen($bytes)-1])^1);file_put_contents($fixture,$bytes);touch($fixture,$mtime);clearstatcache();
$b=$p->describe($fixture,190,190,['mode'=>'cover']);
checkImage($a['key']!==$b['key'], 'same-size same-second replacement invalidates derivatives');unlink($fixture);
checkImage(get_class(app('system.resizer'))===App\Classes\OptimizedResizeImages::class, 'CMS resizer override registered');
$public = $p->describe($source, 1920, 1920, ['extension'=>'webp', 'quality'=>82]);
$p->render($public);$publicSize=getimagesize($p->path($public));
checkImage(max($publicSize[0],$publicSize[1])===1920 && $publicSize[2]===IMAGETYPE_WEBP, 'public derivative is a 1920-pixel WebP');
checkImage(filesize($p->path($public)) < filesize($source), 'public sample is smaller than original');
echo 'PUBLIC_BYTES='.filesize($p->path($public)).' ORIGINAL_BYTES='.filesize($source)."\n";
unlink($source);
echo 'WORKER_SECONDS='.round(microtime(true)-$start,3)."\n";
