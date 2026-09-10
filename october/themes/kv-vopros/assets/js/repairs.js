/* Точка входа страницы «Пакетный ремонт»: подключает модули секций. */

import * as header from "../homepage/js/sections/header.js";

document.documentElement.classList.remove("no-js");

header.init();

// Reveal CMS portfolio entries in batches; without JavaScript every case stays visible.
const portfolio = document.querySelector(".portfolio");
const more = portfolio?.querySelector(".portfolio__more");
if (more) {
    const cards = Array.from(portfolio.querySelectorAll(".repair-portfolio-card"));
    let visibleCount = 6;
    const update = () => {
        cards.forEach((card, index) => { card.hidden = index >= visibleCount; });
        more.hidden = visibleCount >= cards.length;
    };
    more.addEventListener("click", () => {
        const nextCard = cards[visibleCount];
        visibleCount += 6;
        update();
        nextCard?.focus({ preventScroll: true });
    });
    update();
}
