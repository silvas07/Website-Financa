document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // (opcional) fechar ao clicar em um link
    menu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});
