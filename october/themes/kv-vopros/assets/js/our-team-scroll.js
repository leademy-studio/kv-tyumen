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

        var targetLeft = 0;
        var rafId = 0;
        var EASE = 0.22;

        function isSectionActive() {
            var rect = section.getBoundingClientRect();
            var vh = window.innerHeight || document.documentElement.clientHeight;
            return rect.top < vh * 0.8 && rect.bottom > vh * 0.2;
        }

        function runAnimation() {
            var current = slider.scrollLeft;
            var diff = targetLeft - current;

            if (Math.abs(diff) < 0.5) {
                slider.scrollLeft = targetLeft;
                rafId = 0;
                return;
            }

            slider.scrollLeft = current + diff * EASE;
            rafId = requestAnimationFrame(runAnimation);
        }

        function handleWheel(event) {
            if (event.__ourTeamWheelHandled) {
                return;
            }

            if (!isSectionActive()) {
                return;
            }

            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            }

            var maxLeft = slider.scrollWidth - slider.clientWidth;
            if (maxLeft <= 1) {
                return;
            }

            var rawDelta = normalizeWheelDelta(event);
            var current = slider.scrollLeft;

            if (!rafId) {
                targetLeft = current;
            }

            if (rawDelta > 0 && targetLeft >= maxLeft - 1 && current >= maxLeft - 2) {
                return;
            }
            if (rawDelta < 0 && targetLeft <= 1 && current <= 2) {
                return;
            }

            targetLeft += rawDelta;
            if (targetLeft < 0) { targetLeft = 0; }
            if (targetLeft > maxLeft) { targetLeft = maxLeft; }

            event.__ourTeamWheelHandled = true;
            event.preventDefault();
            event.stopPropagation();

            if (!rafId) {
                rafId = requestAnimationFrame(runAnimation);
            }
        }

        // Intercept wheel globally while section is active; keeps behavior
        // stable when cursor is over child elements.
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
