(function () {
    function initOurTeamScroll() {
        var section = document.querySelector(".our-team-section");
        var slider = section ? section.querySelector(".our-team-slider") : null;

        if (!section || !slider || section.dataset.ourTeamScrollInit === "1") {
            return;
        }

        section.dataset.ourTeamScrollInit = "1";

        function hasHorizontalOverflow() {
            return slider.scrollWidth - slider.clientWidth > 1;
        }

        function canScrollRight() {
            return slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 1;
        }

        function canScrollLeft() {
            return slider.scrollLeft > 1;
        }

        function isSectionActive() {
            var rect = section.getBoundingClientRect();
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            return rect.top <= 0 && rect.bottom > Math.min(220, viewportHeight * 0.35);
        }

        function onWheel(event) {
            if (!hasHorizontalOverflow() || !isSectionActive()) {
                return;
            }

            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            }

            if (event.deltaY > 0 && canScrollRight()) {
                event.preventDefault();
                slider.scrollLeft += event.deltaY;
                return;
            }

            if (event.deltaY < 0 && canScrollLeft()) {
                event.preventDefault();
                slider.scrollLeft += event.deltaY;
            }
        }

        window.addEventListener("wheel", onWheel, { passive: false });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initOurTeamScroll);
    } else {
        initOurTeamScroll();
    }
})();
