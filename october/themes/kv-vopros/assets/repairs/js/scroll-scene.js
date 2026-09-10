/* Общий помощник для секций со сценарной анимацией.

   Считает прогресс прокрутки внутри обёртки .pin: 0 — сцена только залипла,
   1 — сцена доиграна и уходит вверх. Вызывает onProgress(p, step) не чаще
   одного раза за кадр. */

const MOBILE_QUERY = "(max-width: 1200px)";
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function isSceneDisabled(disableOnMobile = true) {
    return (
        (disableOnMobile && window.matchMedia(MOBILE_QUERY).matches) ||
        window.matchMedia(MOTION_QUERY).matches
    );
}

export function createScene(pin, onProgress, { mobileScene = null } = {}) {
    if (!pin) {
        return null;
    }

    const steps = Number(
        getComputedStyle(pin).getPropertyValue("--pin-steps").trim() || 1
    );
    let frame = 0;
    let lastStep = -1;
    let active = false;

    function measure() {
        const mobile = mobileScene && window.matchMedia(MOBILE_QUERY).matches;
        const rect = (mobile ? mobileScene.track : pin).getBoundingClientRect();
        const stageHeight = mobile ? mobileScene.stage.getBoundingClientRect().height : window.innerHeight;
        const stickyTop = mobile ? parseFloat(getComputedStyle(mobileScene.stage).top) || 0 : 0;
        const travel = rect.height - stageHeight;

        if (travel <= 0) {
            return { p: 0, step: 0 };
        }

        const p = clamp((stickyTop - rect.top) / travel, 0, 1);
        const step = Math.min(Math.floor(p * (steps + 1)), steps);

        return { p, step };
    }

    function update() {
        frame = 0;
        if (!active) return;

        const { p, step } = measure();
        const changed = step !== lastStep;

        lastStep = step;
        onProgress(p, step, changed);
    }

    function schedule() {
        if (!frame) {
            frame = window.requestAnimationFrame(update);
        }
    }

    /* A mobile scene can pin only its cards while the section text scrolls normally.
       Without one, narrow screens keep the static fallback. Reduced motion always wins. */
    function enable() {
        if (active) {
            return;
        }

        active = true;
        pin.classList.remove("is-static");
        window.addEventListener("scroll", schedule, { passive: true });
        update();
    }

    function disable() {
        window.cancelAnimationFrame(frame);
        frame = 0;
        if (active) {
            window.removeEventListener("scroll", schedule);
        }

        active = false;
        lastStep = -1;
        pin.classList.add("is-static");
        onProgress(1, steps, true);
    }

    function sync() {
        if (isSceneDisabled(!mobileScene)) {
            disable();
        } else {
            enable();
            schedule();
        }
    }

    const queries = [
        window.matchMedia(MOBILE_QUERY),
        window.matchMedia(MOTION_QUERY)
    ];

    for (const query of queries) {
        query.addEventListener("change", sync);
    }

    window.addEventListener("resize", sync);
    sync();

    return {
        destroy() {
            active = false;
            window.cancelAnimationFrame(frame);
            frame = 0;
            for (const query of queries) {
                query.removeEventListener("change", sync);
            }

            window.removeEventListener("resize", sync);
            window.removeEventListener("scroll", schedule);
        }
    };
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/* Линейная интерполяция между кадрами: segments — массив чисел на кадр */
export function lerp(a, b, t) {
    return a + (b - a) * t;
}

/* Разбивает прогресс 0…1 на (frames - 1) отрезков и возвращает
   индекс отрезка и локальный прогресс внутри него */
export function segment(p, frames) {
    const count = frames - 1;
    const scaled = clamp(p, 0, 1) * count;
    const index = Math.min(Math.floor(scaled), count - 1);

    return { index, t: scaled - index };
}
