
// toggle menu
const header = document.querySelector("header");
const toggle__menu = document.querySelector('.toggle__menu');
const toggle = document.querySelector('.toggle');

toggle__menu.onclick = function () {
    header.classList.toggle('active');
}
toggle.onclick = function () {
    header.classList.toggle('active2');
}
