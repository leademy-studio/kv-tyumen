(function () {
    var LISTENER_OPTIONS = { passive: false, capture: true };

    function normalizeWheelDelta(event) {
        var delta = event.deltaY;

        if (event.deltaMode === 1) {
            delta *= 32;
        } else if (event.deltaMode === 2) {
            delta *= window.innerHeight || 800;
        }

        if (Math.abs(delta) < 24) {
            delta = delta < 0 ? -24 : 24;
        }

        return delta;
    }

    function initSection(section) {
        var slider = section.querySelector(".our-team-slider");

        if (!slider || section.dataset.ourTeamScrollInit === "1") {
            return false;
        }

        section.dataset.ourTeamScrollInit = "1";

        // Target scroll position driven by wheel events.
        var targetLeft = 0;
        // Whether a RAF animation loop is already running.
        var rafPending = false;
        // Ease factor: fraction of remaining distance covered per frame (~60 fps).
        var EASE = 0.12;

        // Return true when the section's vertical centre is close to the
        // viewport's vertical centre (within 25 % of viewport height).
        function isSectionCentered() {
            var rect = section.getBoundingClientRect();
            var vh = window.innerHeight || document.documentElement.clientHeight;
            var sectionMid = rect.top + rect.height / 2;
            var viewportMid = vh / 2;
            return Math.abs(sectionMid - viewportMid) < vh * 0.25;
        }

        // RAF animation loop: eases slider.scrollLeft toward targetLeft.
        function animateToTarget() {
            var current = slider.scrollLeft;
            var diff = targetLeft - current;

            if (Math.abs(diff) < 0.5) {
                slider.scrollLeft = targetLeft;
                rafPending = false;
                return;
            }

            slider.scrollLeft = current + diff * EASE;
            requestAnimationFrame(animateToTarget);
        }

        function handleWheel(event) {
            if (event.__ourTeamWheelHandled) {
                return;
            }

            // Only intercept wheel when section is vertically centred.
            if (!isSectionCentered()) {
                return;
            }

            // Ignore predominantly horizontal wheel events.
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            }

            var maxLeft = slider.scrollWidth - slider.clientWidth;
            if (maxLeft <= 1) {
                return;
            }

            var rawDelta = normalizeWheelDelta(event);
            var actual = slider.scrollLeft;

            // At hard boundaries release to page scroll.
            if (rawDelta > 0 && actual >= maxLeft - 1) {
                targetLeft = maxLeft;
                return;
            }
            if (rawDelta < 0 && actual <= 1) {
                targetLeft = 0;
                return;
            }

            // Re-sync target with actual position when the animation is idle
            // (e.g., after a touch/drag).
            if (!rafPending) {
                targetLeft = actual;
            }

            targetLeft += rawDelta;
            if (targetLeft < 0) { targetLeft = 0; }
            if (targetLeft > maxLeft) { targetLeft = maxLeft; }

            event.__ourTeamWheelHandled = true;
            event.preventDefault();
            event.stopPropagation();

            if (!rafPending) {
                rafPending = true;
                requestAnimationFrame(animateToTarget);
            }
        }

        // Add multiple capture listeners to survive third-party scroll hooks.
        slider.addEventListener("wheel", handleWheel, LISTENER_OPTIONS);
        document.addEventListener("wheel", handleWheel, LISTENER_OPTIONS);
        window.addEventListener("wheel", handleWheel, LISTENER_OPTIONS);

        return true;
    }

    function initOurTeamScroll() {
        var sections = document.querySelectorAll(".our-team-section");
        var initializedAny = false;

        for (var i = 0; i < sections.length; i += 1) {
            initializedAny = initSection(sections[i]) || initializedAny;
        }

        return initializedAny;
    }

    function startInit() {
        if (initOurTeamScroll()) {
            return;
        }

        var attempts = 0;
        var maxAttempts = 80;
        var interval = window.setInterval(function () {
            attempts += 1;

            if (initOurTeamScroll() || attempts >= maxAttempts) {
                window.clearInterval(interval);
            }
        }, 250);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startInit);
    } else {
        startInit();
    }
})();
