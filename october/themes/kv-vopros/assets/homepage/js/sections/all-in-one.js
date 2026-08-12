/* all-in-one-section — накопление заголовков и смена текста с фото.

   Состояния Figma (18:3595): default → step-1 → step-2.
   Заголовки накапливаются, текстовый блок и изображение меняются на каждом шаге. */

import { clamp, createScene } from "../scroll-scene.js";

const MOBILE_QUERY = "(max-width: 767px)";

export function init() {
    const pin = document.querySelector('[data-scene="all-in-one"]');

    if (!pin) {
        return;
    }

    const titles = Array.from(pin.querySelectorAll(".all-in-one__title"));
    const copies = Array.from(pin.querySelectorAll(".all-in-one__copy"));
    const images = Array.from(pin.querySelectorAll(".all-in-one__media img"));
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    let mobileFrame = 0;
    let mobileStep = -1;

    function applyStep(step, stackImages = false) {
        titles.forEach((el, i) => {
            el.classList.toggle("is-revealed", i <= step);
        });

        copies.forEach((el, i) => {
            el.classList.toggle("is-active", i === step);
        });

        images.forEach((el, i) => {
            el.classList.toggle("is-active", stackImages ? i <= step : i === step);
        });
    }

    function measureMobileStep() {
        const rect = pin.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;

        if (travel <= 0) {
            return 0;
        }

        const progress = clamp(-rect.top / travel, 0, 1);

        return Math.min(Math.floor(progress * 3), 2);
    }

    function updateMobile() {
        mobileFrame = 0;

        if (!mobileQuery.matches) {
            return;
        }

        const step = measureMobileStep();

        if (step === mobileStep) {
            return;
        }

        mobileStep = step;
        applyStep(step, true);
    }

    function scheduleMobile() {
        if (!mobileFrame) {
            mobileFrame = window.requestAnimationFrame(updateMobile);
        }
    }

    function syncMobile() {
        mobileStep = -1;

        if (mobileQuery.matches) {
            window.addEventListener("scroll", scheduleMobile, { passive: true });
            updateMobile();
            return;
        }

        window.removeEventListener("scroll", scheduleMobile);
    }

    createScene(pin, (progress, step, changed) => {
        if (mobileQuery.matches) {
            return;
        }

        if (!changed) {
            return;
        }

        applyStep(step);
    });

    mobileQuery.addEventListener("change", syncMobile);
    window.addEventListener("resize", syncMobile);
    syncMobile();
}
