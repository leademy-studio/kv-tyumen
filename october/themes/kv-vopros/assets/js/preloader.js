(function () {
    var preloader = document.querySelector('[data-site-preloader]');
    if (!preloader) {
        return;
    }

    var body = document.body;
    if (body && window.getComputedStyle) {
        var style = window.getComputedStyle(body);
        var backgroundColor = style.backgroundColor;
        var backgroundImage = style.backgroundImage;

        if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
            preloader.style.backgroundColor = backgroundColor;
        }

        if (backgroundImage && backgroundImage !== 'none') {
            preloader.style.backgroundImage = backgroundImage;
        }
    }

    preloader.removeAttribute('hidden');
    preloader.setAttribute('aria-hidden', 'false');

    window.requestAnimationFrame(function () {
        preloader.classList.add('is-active');
    });

    var hide = function () {
        preloader.classList.remove('is-active');
        preloader.setAttribute('aria-hidden', 'true');
        window.setTimeout(function () {
            preloader.setAttribute('hidden', '');
        }, 500);
    };

    var safetyTimer = window.setTimeout(hide, 8000);

    if (document.readyState === 'complete') {
        window.clearTimeout(safetyTimer);
        hide();
        return;
    }

    window.addEventListener(
        'load',
        function () {
            window.clearTimeout(safetyTimer);
            hide();
        },
        { once: true }
    );
})();
