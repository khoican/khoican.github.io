const nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("shadow-md");
    } else {
        nav.classList.remove("shadow-md");
    }
})