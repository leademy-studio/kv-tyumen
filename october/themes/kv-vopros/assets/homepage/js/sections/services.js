/* services-section — состояние hover карточки услуги.

   Состояния Figma (14:3621): State=default / State=hover.
   Наведение мышью обрабатывает CSS, здесь добавлена клавиатурная фокусировка
   и тап на тач-устройствах, где :hover не срабатывает. */

export function init() {
    const cards = Array.from(document.querySelectorAll(".services__card"));

    for (const card of cards) {
        card.addEventListener("click", (event) => {
            if (card.getAttribute("href") === "#") {
                event.preventDefault();
            }
        });

        card.addEventListener("focusin", () => {
            card.classList.add("is-hover");
        });

        card.addEventListener("focusout", () => {
            card.classList.remove("is-hover");
        });

        card.addEventListener(
            "touchstart",
            () => {
                card.classList.add("is-hover");
            },
            { passive: true }
        );

        card.addEventListener(
            "touchend",
            () => {
                card.classList.remove("is-hover");
            },
            { passive: true }
        );
    }
}
