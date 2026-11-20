<?php namespace KV\Leads\Models;

use BackendAuth;
use System\Models\File;

class Resume extends File
{
    public function getStorageDirectory()
    {
        // Dot directories are denied by the site's web server.
        return '.resumes/';
    }

    public function output($disposition = 'attachment', $returnResponse = true)
    {
        abort_unless(BackendAuth::userHasAccess('kv.leads.access_leads'), 403);

        return $this->download();
    }
}
