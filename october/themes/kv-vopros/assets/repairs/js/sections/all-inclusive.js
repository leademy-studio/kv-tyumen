/* all-inclusive-section — накопление карточек в стопку.

   Состояния Figma (87:3285 / 144:3249): State=default → State=step-4.
   Текст секции неизменен, на каждом шаге в стопке появляется
   следующая карточка — к финалу видны все пять. */

import { createScene } from "../scroll-scene.js";

export function init() {
    const pin = document.querySelector('[data-scene="all-inclusive"]');

    if (!pin) {
        return;
    }

    const cards = Array.from(pin.querySelectorAll(".all-inclusive__card"));

    if (!cards.length) {
        return;
    }

    function applyStep(step) {
        cards.forEach((card, i) => {
            card.classList.toggle("is-active", i <= step);
        });
    }

    createScene(pin, (progress, step, changed) => {
        if (changed) {
            applyStep(step);
        }
    });
}
