/* Scroll-driven interpolation of Figma 87:3285, default → step-4.
   Text stays fixed while new cards enter and the previous cards rotate away. */

import { createScene } from "../scroll-scene.js";
import { sampleCards } from "./all-inclusive-motion.js";

export function init() {
    const pin = document.querySelector('[data-scene="all-inclusive"]');

    if (!pin) {
        return;
    }

    const cards = Array.from(pin.querySelectorAll(".all-inclusive__card"));

    if (!cards.length) {
        return;
    }

    createScene(pin, progress => {
        const poses = sampleCards(progress);
        cards.forEach((card, index) => {
            const [x, y, rotation, opacity] = poses[index];
            card.style.setProperty("--card-x", `${(x / 16).toFixed(5)}rem`);
            card.style.setProperty("--card-y", `${(y / 16).toFixed(5)}rem`);
            card.style.setProperty("--card-rotation", `${rotation.toFixed(5)}deg`);
            card.style.setProperty("--card-opacity", opacity.toFixed(5));
            card.setAttribute("aria-hidden", String(opacity === 0));
        });
    });
}
