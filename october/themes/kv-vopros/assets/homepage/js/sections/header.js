/* header — бургер и раскрытие подменю «Услуги». */

export function init() {
    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    const burger = header.querySelector(".header__burger");
    const panel = header.querySelector(".header__panel");
    const closeControls = Array.from(header.querySelectorAll("[data-header-close]"));

    function setMenuOpen(open) {
        burger?.setAttribute("aria-expanded", String(open));
        panel?.setAttribute("aria-hidden", String(!open));
        if (panel) {
            panel.inert = !open;
        }
        header.classList.toggle("is-menu-open", open);
    }

    setMenuOpen(false);

    if (burger) {
        burger.addEventListener("click", () => {
            const open = burger.getAttribute("aria-expanded") === "true";

            setMenuOpen(!open);
        });
    }

    closeControls.forEach((control) => {
        control.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });
}
