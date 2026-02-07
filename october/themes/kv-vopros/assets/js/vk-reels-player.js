(function () {
    const player = document.querySelector('.vk-reels-player');
    if (!player) return;

    const rawUrl = (player.getAttribute('data-vk-url') || '').trim();
    if (!rawUrl) {
        player.remove();
        return;
    }

    const iframe = player.querySelector('.vk-reels-player__iframe');
    const playBtn = player.querySelector('[data-action="play"]');
    const muteBtn = player.querySelector('[data-action="mute"]');

    let isPlaying = true;
    let isMuted = true;

    player.classList.add('is-muted');

    const baseUrl = buildEmbedUrl(rawUrl);
    updateIframe();

    if (playBtn) {
        playBtn.addEventListener('click', function () {
            isPlaying = !isPlaying;
            player.classList.toggle('is-paused', !isPlaying);
            playBtn.setAttribute('aria-pressed', String(isPlaying));
            playBtn.setAttribute('aria-label', isPlaying ? 'Пауза' : 'Воспроизвести');
            updateIframe();
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', function () {
            isMuted = !isMuted;
            player.classList.toggle('is-muted', isMuted);
            muteBtn.setAttribute('aria-pressed', String(isMuted));
            muteBtn.setAttribute('aria-label', isMuted ? 'Звук выключен' : 'Звук включен');
            updateIframe();
        });
    }

    function updateIframe() {
        if (!iframe) return;
        const src = addParams(baseUrl, {
            autoplay: isPlaying ? '1' : '0',
            mute: isMuted ? '1' : '0'
        });
        iframe.src = src;
    }

    function buildEmbedUrl(url) {
        const normalized = normalizeUrl(url);
        if (normalized.includes('video_ext.php')) {
            return normalized;
        }

        const videoMatch = normalized.match(/vk\.com\/(?:video|clip)(-?\d+)_([0-9]+)/);
        if (videoMatch) {
            return `https://vk.com/video_ext.php?oid=${videoMatch[1]}&id=${videoMatch[2]}`;
        }

        const zMatch = normalized.match(/vk\.com\/video\?z=video(-?\d+)_([0-9]+)/);
        if (zMatch) {
            return `https://vk.com/video_ext.php?oid=${zMatch[1]}&id=${zMatch[2]}`;
        }

        return normalized;
    }

    function normalizeUrl(url) {
        if (url.startsWith('//')) {
            return `https:${url}`;
        }
        return url;
    }

    function addParams(url, params) {
        try {
            const parsed = new URL(url, window.location.origin);
            Object.keys(params).forEach((key) => {
                parsed.searchParams.set(key, params[key]);
            });
            return parsed.toString();
        } catch (err) {
            const joiner = url.includes('?') ? '&' : '?';
            const paramString = Object.keys(params)
                .map((key) => `${key}=${encodeURIComponent(params[key])}`)
                .join('&');
            return `${url}${joiner}${paramString}`;
        }
    }
})();
