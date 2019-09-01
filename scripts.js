var navscreen = document.querySelector(".navscreen");
var open = document.querySelector(".icon");
var close = document.querySelector(".close");

function navToggle() {
    navscreen.classList.toggle("shownavscreen");
}

open.addEventListener("click", navToggle);
close.addEventListener("click", navToggle);
