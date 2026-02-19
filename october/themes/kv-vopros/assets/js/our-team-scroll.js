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

        // Accumulated raw delta between snap-jumps (prevents over-sensitivity).
        var deltaAccum = 0;
        var DELTA_THRESHOLD = 60; // px of accumulated wheel movement to trigger a card jump

        function isSectionFullyApproached() {
            var rect = section.getBoundingClientRect();
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            // Only intercept wheel events when the section occupies a meaningful
            // portion of the viewport (at least 40 % visible).
            var visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            return visible > 0 && visible / rect.height >= 0.4;
        }

        function getCardWidth() {
            var card = slider.querySelector(".our-team-card");
            if (!card) { return slider.clientWidth; }
            // Include the gap (margin / CSS gap) by measuring offset difference.
            var cards = slider.querySelectorAll(".our-team-card");
            if (cards.length > 1) {
                return cards[1].offsetLeft - cards[0].offsetLeft;
            }
            return card.offsetWidth;
        }

        function snapToCard(direction) {
            var cardWidth = getCardWidth();
            if (cardWidth <= 0) { return false; }

            var current = slider.scrollLeft;
            var maxLeft = slider.scrollWidth - slider.clientWidth;

            // Find the index of the next snap point in the given direction.
            var targetIndex;
            if (direction > 0) {
                targetIndex = Math.floor(current / cardWidth) + 1;
            } else {
                targetIndex = Math.ceil(current / cardWidth) - 1;
            }

            var targetLeft = targetIndex * cardWidth;
            if (targetLeft < 0) { targetLeft = 0; }
            if (targetLeft > maxLeft) { targetLeft = maxLeft; }

            if (Math.abs(targetLeft - current) <= 0.5) {
                return false; // Already at this boundary — let the page scroll.
            }

            slider.scrollTo({ left: targetLeft, behavior: "smooth" });
            return true;
        }

        function handleWheel(event) {
            if (event.__ourTeamWheelHandled) {
                return;
            }

            if (!isSectionFullyApproached()) {
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

            // At the hard boundaries, release the page scroll.
            if (rawDelta > 0 && current >= maxLeft - 1) {
                deltaAccum = 0;
                return;
            }
            if (rawDelta < 0 && current <= 1) {
                deltaAccum = 0;
                return;
            }

            // Reset accumulator if direction reversed.
            if ((rawDelta > 0 && deltaAccum < 0) || (rawDelta < 0 && deltaAccum > 0)) {
                deltaAccum = 0;
            }

            deltaAccum += rawDelta;

            event.__ourTeamWheelHandled = true;
            event.preventDefault();
            event.stopPropagation();

            if (Math.abs(deltaAccum) >= DELTA_THRESHOLD) {
                var direction = deltaAccum > 0 ? 1 : -1;
                var didSnap = snapToCard(direction);
                deltaAccum = 0;

                // If snap found no next card (we're at the boundary), immediately
                // stop consuming events so the page can start scrolling.
                if (!didSnap) {
                    event.__ourTeamWheelHandled = false;
                    return;
                }
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
