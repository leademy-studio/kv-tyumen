/* Shared preview loader: two short status requests at most; one task per URL. */
(() => {
    if (window.kvImagePreviews) return;
    const tasks = new Map();
    const queue = [];
    let active = 0;

    function finish(task, url) {
        task.result = url;
        for (const img of task.images) {
            if (img.dataset.kvPreview === task.url) {
                img.src = url;
                img.removeAttribute('aria-busy');
            }
        }
        task.images.clear();
    }
    function pump() {
        while (active < 2 && queue.length) {
            const task = queue.shift();
            active++;
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 8000);
            fetch(task.url, {credentials: 'same-origin', cache: 'no-store', signal: controller.signal})
                .then(async response => {
                    if (response.status !== 200 && response.status !== 202) throw new Error('Preview failed');
                    const data = await response.json();
                    if (data.ready && data.url) finish(task, data.url);
                    else retry(task);
                })
                .catch(() => retry(task))
                .finally(() => { clearTimeout(timeout); active--; pump(); });
        }
    }
    function retry(task) {
        task.attempts++;
        if (Date.now() - task.started > 180000) {
            for (const img of task.images) {
                img.removeAttribute('aria-busy');
                img.alt = 'Не удалось подготовить превью. Нажмите, чтобы повторить.';
                img.onclick = () => {
                    tasks.delete(task.url);
                    img.onclick = null;
                    load(img, task.url);
                };
            }
            return;
        }
        setTimeout(() => { queue.push(task); pump(); }, Math.min(5000, 1000 + task.attempts * 500));
    }
    function load(img, url) {
        if (!url) return;
        img.dataset.kvPreview = url;
        const parsed = new URL(url, location.origin);
        if (parsed.origin !== location.origin || !/^\/image-preview\/[a-f0-9]{64}$/.test(parsed.pathname)) {
            img.src = url;
            return;
        }
        let task = tasks.get(url);
        if (task?.result) { img.src = task.result; return; }
        img.setAttribute('aria-busy', 'true');
        if (!task) {
            task = {url, images: new Set(), attempts: 0, started: Date.now()};
            tasks.set(url, task);
            queue.push(task);
        }
        task.images.add(img);
        pump();
    }
    function scan(root) {
        if (root.nodeType !== 1) return;
        const imgs = root.matches('img[data-kv-preview]') ? [root] : [];
        imgs.push(...root.querySelectorAll('img[data-kv-preview]'));
        for (const img of imgs) {
            if (img.dataset.kvPreviewLoaded) continue;
            img.dataset.kvPreviewLoaded = '1';
            load(img, img.dataset.kvPreview);
        }
    }
    function patchFinder() {
        let Finder;
        try { Finder = window.oc?.importControl('mediafinder'); } catch (_) { return; }
        if (!Finder || Finder.prototype.kvPreviewPatched) return;
        Finder.prototype.kvPreviewPatched = true;
        Finder.prototype.makeFilePreview = function (item) {
            const preview = $(this.previewTemplate);
            preview.attr('data-path', item.path).attr('data-folder', this.makeFolderPath(item));
            // Remove irrelevant audio/video tags BEFORE assigning src. Previously they
            // also downloaded every photo before being removed from the DOM.
            if (['video', 'audio'].includes(item.documentType)) {
                preview.find('img[data-thumb-url]').remove();
                preview.find('[data-document-type]').each(function () {
                    if (this.dataset.documentType !== item.documentType) this.remove();
                });
            } else preview.find('[data-document-type]').remove();
            preview.find('[data-public-url]').attr('src', item.publicUrl);
            preview.find('[data-thumb-url]').each(function () {
                if (this.tagName === 'IMG') {
                    this.dataset.kvPreviewLoaded = '1';
                    load(this, item.thumbUrl);
                } else this.src = item.thumbUrl;
            });
            preview.find('[data-title]').text(item.title).attr('title', item.path);
            return preview;
        };
    }
    function patchManager() {
        let Manager;
        try { Manager = window.oc?.importControl('media-manager'); } catch (_) { return; }
        if (!Manager || Manager.prototype.kvUploadPatched) return;
        const proto = Manager.prototype;
        proto.kvUploadPatched = true;
        const initUploader = proto.initUploader;
        const queueComplete = proto.uploadQueueComplete;
        proto.initUploader = function () {
            initUploader.call(this);
            if (!this.dropzone) return;
            this.dropzone.options.parallelUploads = 2;
            this.dropzone.on('complete', () => setTimeout(() => this.kvProcessNext(), 0));
        };
        proto.kvProcessNext = function () {
            if (!this.dropzone) return;
            const slots = 2 - this.dropzone.getUploadingFiles().length;
            const next = this.dropzone.getQueuedFiles().filter(file => file.kvApproved).slice(0, Math.max(0, slots));
            for (const file of next) this.dropzone.processFile(file);
        };
        proto.checkFilesBeforeUpload = function () {
            const files = this.dropzone.getQueuedFiles().filter(file => !file.kvApproved);
            if (!files.length) return;
            const approve = (existing, overwrite) => {
                for (const file of files) {
                    if (existing.includes(file.name) && !overwrite) this.dropzone.removeFile(file);
                    else {
                        file.kvApproved = true;
                        file.kvOverwrite = overwrite && existing.includes(file.name);
                    }
                }
                this.kvProcessNext();
            };
            this.$el.request('onCheckFilesExist', {
                data: {file_names: files.map(file => file.name), path: this.$el.find('[data-type="current-folder"]').val()},
                success: data => {
                    const existing = data.existing || [];
                    if (!existing.length) approve([], false);
                    else oc.confirm(this.config.overwriteConfirm + ' (' + existing.join(', ') + ')', confirmed => approve(existing, confirmed));
                },
                // Server still rejects overwrites when the conflict check fails.
                error: () => approve([], false)
            });
        };
        proto.uploadSending = function (file, xhr, formData) {
            formData.append('path', this.$el.find('[data-type="current-folder"]').val());
            if (file.kvOverwrite) formData.append('force_overwrite', '1');
        };
        proto.uploadSuccess = function () {
            // Completion belongs to the entire batch, not the first successful file.
        };
        proto.uploadQueueComplete = function () {
            if (this.dropzone.getRejectedFiles().length || this.dropzone.getFilesWithStatus('error').length) {
                this.updateUploadBar('error', 'progress-bar bg-danger');
            } else this.updateUploadBar('success', 'progress-bar bg-success');
            queueComplete.call(this);
        };
    }
    window.kvImagePreviews = {load, patchFinder};
    patchFinder();
    patchManager();
    new MutationObserver(records => {
        patchFinder();
        patchManager();
        for (const record of records) for (const node of record.addedNodes) scan(node);
    }).observe(document.documentElement, {childList: true, subtree: true});
    document.addEventListener('DOMContentLoaded', () => { patchFinder(); patchManager(); scan(document.documentElement); });
    document.addEventListener('ajaxUpdateComplete', () => { patchFinder(); patchManager(); });
})();
