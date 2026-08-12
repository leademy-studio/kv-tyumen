/* cases-section — перелистывание колоды кейсов.

   Состояния Figma (21:3683): default → step-1 … step-4, всего пять кейсов.
   Активная карточка выходит вперёд, остальные уходят вглубь колоды. */

import { clamp, createScene } from "../scroll-scene.js";

const MOBILE_QUERY = "(max-width: 767px)";
const CASE_MOBILE_STATES = [
    [{ index: 0, active: true }],
    [
        { index: 0 },
        { index: 1, active: true }
    ],
    [
        { index: 0 },
        { index: 1 },
        { index: 2, active: true }
    ],
    [
        { index: 0 },
        { index: 1 },
        { index: 2 },
        { index: 3, active: true }
    ],
    [
        { index: 0 },
        { index: 1 },
        { index: 2 },
        { index: 3, labelHidden: true }
    ]
];

function getDesktopOrder(step, total) {
    const active = Math.min(step, total - 1);
    const order = [];

    for (let index = active; index >= 0; index -= 1) {
        order.push(index);
    }

    return order;
}

export function init() {
    const pin = document.querySelector('[data-scene="cases"]');

    if (!pin) {
        return;
    }

    const cards = Array.from(pin.querySelectorAll(".cases__card"));
    const total = cards.length;

    if (!total) {
        return;
    }

    const section = pin.querySelector(".cases");
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const finalDesktopStep = Number(
        getComputedStyle(pin).getPropertyValue("--pin-steps").trim() || total - 1
    );
    let mobileFrame = 0;
    let mobileStep = -1;
    let desktopStep = -1;
    let enteringFrame = 0;

    function applyDesktopStep(step, { animateEntry = false } = {}) {
        const order = getDesktopOrder(step, total);
        const enteringCard = animateEntry ? cards[order[0]] : null;

        if (enteringFrame) {
            window.cancelAnimationFrame(enteringFrame);
            enteringFrame = 0;
        }

        cards.forEach((card, i) => {
            const depth = order.indexOf(i);

            card.classList.remove("is-label-hidden");

            if (depth < 0) {
                card.style.display = "none";
                card.classList.remove("is-active", "is-entering");
                return;
            }

            card.style.display = "block";
            card.style.removeProperty("left");
            card.style.removeProperty("top");
            card.style.removeProperty("width");
            card.style.removeProperty("height");
            card.style.removeProperty("transform");
            card.style.removeProperty("z-index");
            card.style.setProperty("--i", depth);
            card.classList.toggle("is-active", depth === 0);
            card.classList.toggle("is-entering", card === enteringCard);
        });

        section?.classList.toggle("is-desktop-cta-visible", step >= finalDesktopStep);

        if (enteringCard) {
            enteringCard.getBoundingClientRect();
            enteringFrame = window.requestAnimationFrame(() => {
                enteringCard.classList.remove("is-entering");
                enteringFrame = 0;
            });
        }
    }

    function measureDesktopStep() {
        const rect = pin.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;

        if (travel <= 0) {
            return 0;
        }

        return Math.min(
            Math.floor(clamp(-rect.top / travel, 0, 1) * (finalDesktopStep + 1)),
            finalDesktopStep
        );
    }

    createScene(pin, (progress, step, changed) => {
        if (mobileQuery.matches) {
            return;
        }

        if (!changed) {
            return;
        }

        applyDesktopStep(step, {
            animateEntry: desktopStep >= 0 && step > desktopStep
        });
        desktopStep = step;
    });

    function measureMobileStep() {
        const rect = pin.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;

        if (travel <= 0) {
            return 0;
        }

        return Math.min(
            Math.floor(clamp(-rect.top / travel, 0, 1) * CASE_MOBILE_STATES.length),
            CASE_MOBILE_STATES.length - 1
        );
    }

    function applyMobileStep(step) {
        const state = CASE_MOBILE_STATES[step];

        for (let index = 0; index < CASE_MOBILE_STATES.length; index += 1) {
            section?.classList.toggle(`is-mobile-step-${index}`, index === step);
        }

        cards.forEach((card, i) => {
            const frame = state.find((item) => item.index === i);

            card.classList.remove("is-active", "is-entering", "is-label-hidden", "is-mobile-visible");

            if (!frame) {
                return;
            }

            card.classList.add("is-mobile-visible");
            card.classList.toggle("is-active", Boolean(frame.active));
            card.classList.toggle("is-label-hidden", Boolean(frame.labelHidden));
        });

        section?.classList.toggle("is-mobile-cta-visible", step >= 4);
    }

    function clearMobileStyles() {
        section?.classList.remove("is-mobile-cta-visible");
        for (let index = 0; index < CASE_MOBILE_STATES.length; index += 1) {
            section?.classList.remove(`is-mobile-step-${index}`);
        }

        cards.forEach((card) => {
            card.classList.remove("is-label-hidden", "is-mobile-visible");
            clearCardInlineStyles(card);
        });
    }

    function clearCardInlineStyles(card) {
        card.style.removeProperty("display");
        card.style.removeProperty("left");
        card.style.removeProperty("top");
        card.style.removeProperty("width");
        card.style.removeProperty("height");
        card.style.removeProperty("transform");
        card.style.removeProperty("z-index");
    }

    function updateMobile() {
        mobileFrame = 0;

        if (!mobileQuery.matches) {
            return;
        }

        pin.classList.remove("is-static");

        const step = measureMobileStep();

        if (step === mobileStep) {
            return;
        }

        mobileStep = step;
        applyMobileStep(step);
    }

    function scheduleMobile() {
        if (!mobileFrame) {
            mobileFrame = window.requestAnimationFrame(updateMobile);
        }
    }

    function syncMobile() {
        mobileStep = -1;

        if (mobileQuery.matches) {
            pin.classList.remove("is-static");
            section?.classList.remove("is-desktop-cta-visible");
            cards.forEach(clearCardInlineStyles);
            window.addEventListener("scroll", scheduleMobile, { passive: true });
            window.addEventListener("resize", scheduleMobile);
            updateMobile();
            return;
        }

        window.removeEventListener("scroll", scheduleMobile);
        window.removeEventListener("resize", scheduleMobile);
        clearMobileStyles();
        desktopStep = measureDesktopStep();
        applyDesktopStep(desktopStep);
    }

    mobileQuery.addEventListener("change", syncMobile);
    syncMobile();
}
