'use strict'

const menuItem = document.querySelectorAll(".menu");
const btnBurger = document.getElementById("burgerButton");

btnBurger.addEventListener("click", () => {
    for (let el of menuItem) {
        el.classList.toggle("show");
    }
})

