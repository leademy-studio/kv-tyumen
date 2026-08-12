/* Общий помощник для секций со сценарной анимацией.

   Считает прогресс прокрутки внутри обёртки .pin: 0 — сцена только залипла,
   1 — сцена доиграна и уходит вверх. Вызывает onProgress(p, step) не чаще
   одного раза за кадр. */

const MOBILE_QUERY = "(max-width: 1200px)";
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function isSceneDisabled() {
    return (
        window.matchMedia(MOBILE_QUERY).matches ||
        window.matchMedia(MOTION_QUERY).matches
    );
}

export function createScene(pin, onProgress) {
    if (!pin) {
        return null;
    }

    const steps = Number(
        getComputedStyle(pin).getPropertyValue("--pin-steps").trim() || 1
    );
    let frame = 0;
    let lastStep = -1;

    function measure() {
        const rect = pin.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;

        if (travel <= 0) {
            return { p: 0, step: 0 };
        }

        const p = clamp(-rect.top / travel, 0, 1);
        const step = Math.min(Math.floor(p * (steps + 1)), steps);

        return { p, step };
    }

    function update() {
        frame = 0;

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

    /* На мобильном и при reduced-motion сцена статична: показываем финал.
       Решение пересматривается при каждом изменении медиазапросов, иначе
       сцена, выключенная на узком экране, не оживёт после ресайза. */
    let active = false;

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
        if (active) {
            window.removeEventListener("scroll", schedule);
        }

        active = false;
        lastStep = -1;
        pin.classList.add("is-static");
        onProgress(1, steps, true);
    }

    function sync() {
        if (isSceneDisabled()) {
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
