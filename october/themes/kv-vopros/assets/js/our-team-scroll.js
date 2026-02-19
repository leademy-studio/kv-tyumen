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

        function isSectionActive() {
            var rect = section.getBoundingClientRect();
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            return rect.top < viewportHeight && rect.bottom > 0;
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

            var before = slider.scrollLeft;
            var next = before + normalizeWheelDelta(event);

            if (next < 0) {
                next = 0;
            } else if (next > maxLeft) {
                next = maxLeft;
            }

            if (Math.abs(next - before) <= 0.5) {
                return;
            }

            slider.scrollLeft = next;
            event.__ourTeamWheelHandled = true;
            event.preventDefault();
            event.stopPropagation();
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
