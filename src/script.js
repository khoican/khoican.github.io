const nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("shadow-md");
    } else {
        nav.classList.remove("shadow-md");
    }
})

const humburger = document.querySelector('#hamburger');
const dropdown = document.querySelector('#dropdown');
const hide = document.querySelector('#hide')

humburger.addEventListener('click', () => {
    dropdown.classList.toggle('xl:left-full');
    dropdown.classList.toggle('xl:transition');
    dropdown.classList.toggle('xl:ease');
    dropdown.classList.toggle('xl:duration-1000');
})
hide.addEventListener('click', () => {
    dropdown.classList.toggle('xl:left-full');
    dropdown.classList.toggle('xl:transition');
    dropdown.classList.toggle('xl:ease');
    dropdown.classList.toggle('xl:duration-1000');
})