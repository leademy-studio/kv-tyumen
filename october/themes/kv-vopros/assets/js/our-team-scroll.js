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

        var targetLeft = slider.scrollLeft || 0;
        var animationId = 0;
        var EASE = 0.22;

        function isCenterLineInsideSection() {
            var rect = section.getBoundingClientRect();
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            var viewportMid = viewportHeight / 2;
            return rect.top <= viewportMid && rect.bottom >= viewportMid;
        }

        function animate() {
            var current = slider.scrollLeft;
            var diff = targetLeft - current;

            if (Math.abs(diff) < 0.5) {
                slider.scrollLeft = targetLeft;
                animationId = 0;
                return;
            }

            slider.scrollLeft = current + diff * EASE;
            animationId = requestAnimationFrame(animate);
        }

        function handleWheel(event) {
            if (event.__ourTeamWheelHandled) {
                return;
            }

            if (!isCenterLineInsideSection()) {
                return;
            }

            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            }

            var maxLeft = slider.scrollWidth - slider.clientWidth;
            if (maxLeft <= 1) {
                return;
            }

            if (!animationId) {
                targetLeft = slider.scrollLeft;
            }

            var delta = normalizeWheelDelta(event);

            if (delta > 0 && targetLeft >= maxLeft - 1) {
                return;
            }

            if (delta < 0 && targetLeft <= 1) {
                return;
            }

            targetLeft += delta;
            if (targetLeft < 0) {
                targetLeft = 0;
            } else if (targetLeft > maxLeft) {
                targetLeft = maxLeft;
            }

            event.__ourTeamWheelHandled = true;
            event.preventDefault();
            event.stopPropagation();

            if (!animationId) {
                animationId = requestAnimationFrame(animate);
            }
        }

        section.addEventListener("wheel", handleWheel, LISTENER_OPTIONS);
        slider.addEventListener("wheel", handleWheel, LISTENER_OPTIONS);

        return true;
    }

    function initMagicScroll() {
        var sections = document.querySelectorAll(".our-team-section");
        var initializedAny = false;

        for (var index = 0; index < sections.length; index += 1) {
            initializedAny = initSection(sections[index]) || initializedAny;
        }

        return initializedAny;
    }

    function startInit() {
        if (initMagicScroll()) {
            return;
        }

        var attempts = 0;
        var maxAttempts = 80;
        var interval = window.setInterval(function () {
            attempts += 1;
            if (initMagicScroll() || attempts >= maxAttempts) {
                window.clearInterval(interval);
            }
        }, 250);
    }

    window.initMagicScroll = initMagicScroll;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startInit);
    } else {
        startInit();
    }
})();
