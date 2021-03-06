const initNavbar = (document: Document): void => {
    const $navToggler = document.querySelector("#navbarToggler") as Element;
    const $navMenu = document.querySelector("#navbarMenu") as Element;
    let isNavOpen = false;

    $navToggler.addEventListener(
        "click",
        () => {
            isNavOpen = !isNavOpen;

            $navToggler.classList.toggle("collapsed");
            $navMenu.classList.toggle("show");

            $navToggler.setAttribute("aria-expanded", String(isNavOpen));
            $navMenu.setAttribute("aria-hidden", String(!isNavOpen));
        },
        false
    );
};

export { initNavbar };
