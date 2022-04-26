const overlay = document.querySelector(".overlay");
const nav = document.querySelector("nav");

function openMenu(e) {
    e.querySelector(".open-menu").classList.toggle("openMenuActive");
    e.querySelector(".close-menu").classList.toggle("closeMenuActive");
    nav.classList.toggle("navOpen");
    overlay.classList.toggle("overlayOpen");
}

function openDropdown(e){
    e.querySelector(".arrow-up").classList.toggle("arrow-up-Open");
    e.querySelector(".arrow-down").classList.toggle("arrow-down-Open");
    e.parentElement.querySelector(".dropdown-list").classList.toggle("dropOpen");
}