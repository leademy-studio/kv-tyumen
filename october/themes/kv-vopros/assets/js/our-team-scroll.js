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

        // Desired horizontal position (may be ahead of the real scrollLeft
        // while the RAF animation is still running).
        var targetLeft = 0;
        var rafPending = false;
        // Ease factor per frame at ~60 fps.
        var EASE = 0.10;

        // True when the section's vertical centre is within 20 % of vh from
        // the viewport's centre — the activation zone for horizontal capture.
        function isSectionCentered() {
            var rect = section.getBoundingClientRect();
            var vh = window.innerHeight || document.documentElement.clientHeight;
            var sectionMid = rect.top + rect.height / 2;
            var viewportMid = vh / 2;
            return Math.abs(sectionMid - viewportMid) < vh * 0.20;
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

            if (!isSectionCentered()) {
                return;
            }

            // Ignore predominantly horizontal events (trackpad side-scroll, etc.).
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            }

            var maxLeft = slider.scrollWidth - slider.clientWidth;
            if (maxLeft <= 1) {
                return;
            }

            var rawDelta = normalizeWheelDelta(event);

            // Sync targetLeft with actual scrollLeft only when animation is idle
            // so dragging / touch doesn't lose its position.
            if (!rafPending) {
                targetLeft = slider.scrollLeft;
            }

            // BOUNDARY CHECK uses targetLeft (queued position), NOT actual
            // scrollLeft.  This way the section releases vertical scroll the
            // moment all cards have been "used up", without waiting for the
            // animation to finish.
            if (rawDelta > 0 && targetLeft >= maxLeft - 1) {
                // Slider already queued to the end — let the page scroll down.
                return;
            }
            if (rawDelta < 0 && targetLeft <= 1) {
                // Slider already queued to the start — let the page scroll up.
                return;
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
