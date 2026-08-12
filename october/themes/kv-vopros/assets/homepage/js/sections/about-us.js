/* about-us-section — раскрытие изображения и каскад карточек.

   Состояния Figma (24:3789): default → step-2 … step-6.
   Step 2: изображение 70%, карточки скрыты.
   Step 3: изображение 100%, карточки скрыты.
   Step 4…6: каскад карточек с offset +500 → +250 → 0. */

import { clamp, createScene, lerp } from "../scroll-scene.js";

const MOBILE_QUERY = "(max-width: 1200px)";
const IMAGE_MID_FRAME = {
    left: 347.65,
    top: 168.4,
    width: 1225.7,
    height: 501.2
};
const IMAGE_FULL_FRAME = {
    left: 85.03,
    top: 61.05,
    width: 1751.31,
    height: 715.89
};

export function init() {
    const pin = document.querySelector('[data-scene="about-us"]');

    if (!pin) {
        return;
    }

    const section = pin.querySelector(".about");
    const image = pin.querySelector(".about__image");
    const stepClasses = [
        "is-step-1",
        "is-step-2",
        "is-step-3",
        "is-step-4",
        "is-step-5"
    ];
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    let defaultImageFrame = null;
    let lastCompact = false;

    function getScale() {
        return parseFloat(getComputedStyle(document.documentElement).fontSize) / 16;
    }

    function scaleFrame(frame) {
        const scale = getScale();

        return {
            left: frame.left * scale,
            top: frame.top * scale,
            width: frame.width * scale,
            height: frame.height * scale
        };
    }

    function interpolateFrame(from, to, t) {
        return {
            left: lerp(from.left, to.left, t),
            top: lerp(from.top, to.top, t),
            width: lerp(from.width, to.width, t),
            height: lerp(from.height, to.height, t)
        };
    }

    function applyImageFrame(progress) {
        if (!image) {
            return;
        }

        if (mobileQuery.matches || progress <= 0) {
            image.style.left = "";
            image.style.top = "";
            image.style.width = "";
            image.style.height = "";
            image.style.transform = "";
            return;
        }

        const fromFrame = defaultImageFrame || readImageFrame(section, image);
        const midFrame = scaleFrame(IMAGE_MID_FRAME);
        const fullFrame = scaleFrame(IMAGE_FULL_FRAME);
        const imageProgress = clamp(progress * 6, 0, 2);
        const frame =
            imageProgress <= 1
                ? interpolateFrame(fromFrame, midFrame, imageProgress)
                : interpolateFrame(midFrame, fullFrame, imageProgress - 1);

        image.style.left = `${fullFrame.left}px`;
        image.style.top = `${fullFrame.top}px`;
        image.style.width = `${fullFrame.width}px`;
        image.style.height = `${fullFrame.height}px`;
        image.style.transform = [
            `translate(${frame.left - fullFrame.left}px, ${frame.top - fullFrame.top}px)`,
            `scale(${frame.width / fullFrame.width}, ${frame.height / fullFrame.height})`
        ].join(" ");
    }

    function updateStaticFrame() {
        if (!image || section.classList.contains("is-compact")) {
            return;
        }

        defaultImageFrame = readImageFrame(section, image);
    }

    window.addEventListener("resize", updateStaticFrame);

    createScene(pin, (progress, step, changed) => {
        const compact = progress > 0.001;

        if (changed || compact !== lastCompact) {
            if (compact && !lastCompact) {
                defaultImageFrame = readImageFrame(section, image);
            }

            section.classList.toggle("is-compact", compact);

            section.classList.remove(...stepClasses);

            if (compact) {
                section.classList.add(`is-step-${Math.max(1, step)}`);
            }

            lastCompact = compact;
        }

        applyImageFrame(compact ? progress : 0);
    });
}

function readImageFrame(section, image) {
    if (!section || !image) {
        return { left: 0, top: 0, width: 0, height: 0 };
    }

    const sectionRect = section.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    return {
        left: imageRect.left - sectionRect.left,
        top: imageRect.top - sectionRect.top,
        width: imageRect.width,
        height: imageRect.height
    };
}
