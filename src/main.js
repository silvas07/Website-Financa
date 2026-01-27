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

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
            const aberto = item.classList.contains("ativo");

            // fecha todos
            items.forEach(i => {
                i.classList.remove("ativo");
                i.querySelector(".accordion-header")
                    .setAttribute("aria-expanded", "false");
            });

            // se não estava aberto, abre o clicado
            if (!aberto) {
                item.classList.add("ativo");
                header.setAttribute("aria-expanded", "true");
            }
        });
    });

    // 🔥 garante que o primeiro já abra
    if (items.length > 0) {
        items[0].classList.add("ativo");
        items[0].querySelector(".accordion-header")
            .setAttribute("aria-expanded", "true");
    }
});

