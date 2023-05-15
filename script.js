let menuIcon = document.querySelector(".menu-icon");
let side_bar = document.querySelector(".side-bar");
let container = document.querySelector(".container");

menuIcon.onclick = function () {

    side_bar.classList.toggle("small-sidebar");
    container.classList.toggle("Large-container");
}