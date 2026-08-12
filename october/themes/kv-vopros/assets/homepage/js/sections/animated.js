/* animated-section — разлёт фотографий и схлопывание в центр.

   Кадры из Figma (component set 8:3559) лежат в data-k1 / data-k2 / data-k3
   каждой фотографии в формате "x,y,w,h" в координатах сцены 1400×700.
   Прогресс скролла делится на два отрезка: k1→k2 и k2→k3. */

import { clamp, createScene, lerp, segment } from "../scroll-scene.js";

const SCENE_UNIT = 16; /* 1rem === 16px в системе макета */
const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MOBILE_FRAMES = [
    [
        { x: 238, y: 277, w: 50, h: 72 },
        { x: -64, y: 226, w: 104, h: 64 },
        { x: 160, y: 105, w: 121, h: 73 },
        { x: 80, y: 142, w: 61, h: 86 },
        { x: -129, y: 14, w: 216, h: 130 },
        { x: 300, y: 53, w: 91, h: 125 },
        { x: 285, y: 328, w: 203, h: 122 },
        { x: -12, y: 344, w: 213, h: 127 }
    ],
    [
        { x: 223, y: 268, w: 37, h: 54 },
        { x: -1, y: 230, w: 77, h: 47 },
        { x: 165, y: 141, w: 90, h: 54 },
        { x: 106, y: 168, w: 45, h: 64 },
        { x: -50, y: 73, w: 161, h: 97 },
        { x: 269, y: 102, w: 67, h: 93 },
        { x: 258, y: 306, w: 151, h: 91 },
        { x: 37, y: 318, w: 158, h: 94 }
    ],
    Array.from({ length: 8 }, () => ({ x: 160, y: 266, w: 0, h: 0 }))
];

export function init() {
    const pin = document.querySelector('[data-scene="animated"]');

    if (!pin) {
        return;
    }

    const photoElements = Array.from(pin.querySelectorAll(".animated__photo"));
    const photos = photoElements.map(
        (el) => ({
            el,
            frames: [
                parseFrame(el.dataset.k1),
                parseFrame(el.dataset.k2),
                parseFrame(el.dataset.k3)
            ]
        })
    );
    const mobilePhotos = photoElements.slice(0, MOBILE_FRAMES[0].length);
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let mobileFrame = 0;

    createScene(pin, (p) => {
        if (mobileQuery.matches) {
            return;
        }

        const { index, t } = segment(p, 3);

        for (const photo of photos) {
            const from = photo.frames[index];
            const to = photo.frames[index + 1];

            const x = lerp(from.x, to.x, t);
            const y = lerp(from.y, to.y, t);
            const w = lerp(from.w, to.w, t);
            const h = lerp(from.h, to.h, t);

            photo.el.style.transform =
                `translate(${x / SCENE_UNIT}rem, ${y / SCENE_UNIT}rem)`;
            photo.el.style.width = `${w / SCENE_UNIT}rem`;
            photo.el.style.height = `${h / SCENE_UNIT}rem`;
            photo.el.style.opacity = w < 2 ? "0" : "1";
        }
    });

    function measureMobileProgress() {
        const rect = pin.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;

        if (travel <= 0) {
            return 0;
        }

        return clamp(-rect.top / travel, 0, 1);
    }

    function applyMobileProgress(progress) {
        const { index, t } = segment(progress, MOBILE_FRAMES.length);

        mobilePhotos.forEach((el, i) => {
            const from = MOBILE_FRAMES[index][i];
            const to = MOBILE_FRAMES[index + 1][i];
            const x = lerp(from.x, to.x, t);
            const y = lerp(from.y, to.y, t);
            const w = lerp(from.w, to.w, t);
            const h = lerp(from.h, to.h, t);

            el.style.left = "0";
            el.style.top = "0";
            el.style.transform = `translate(${x}px, ${y}px)`;
            el.style.width = `${w}px`;
            el.style.height = `${h}px`;
            el.style.opacity = w < 1 || h < 1 ? "0" : "1";
        });
    }

    function updateMobile() {
        mobileFrame = 0;

        if (!mobileQuery.matches || reducedMotionQuery.matches) {
            return;
        }

        pin.classList.remove("is-static");
        applyMobileProgress(measureMobileProgress());
    }

    function scheduleMobile() {
        if (!mobileFrame) {
            mobileFrame = window.requestAnimationFrame(updateMobile);
        }
    }

    function syncMobile() {
        mobileFrame = 0;

        if (mobileQuery.matches && !reducedMotionQuery.matches) {
            pin.classList.remove("is-static");
            window.addEventListener("scroll", scheduleMobile, { passive: true });
            window.addEventListener("resize", scheduleMobile);
            updateMobile();
            return;
        }

        window.removeEventListener("scroll", scheduleMobile);
        window.removeEventListener("resize", scheduleMobile);
    }

    mobileQuery.addEventListener("change", syncMobile);
    reducedMotionQuery.addEventListener("change", syncMobile);
    syncMobile();
}

function parseFrame(value) {
    const [x, y, w, h] = String(value).split(",").map(Number);

    return { x, y, w, h };
}
