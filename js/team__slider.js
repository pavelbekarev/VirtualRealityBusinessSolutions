'use strict'

const arrowLeft = document.querySelector(".team__arrow-left");
const arrowRight = document.querySelector(".team__arrow-right");
const teamItems = document.querySelector(".team__slider__items");

let currentSlide = 1;
let max = 4;
let width = 300;

arrowRight.addEventListener('click', () => {
    let shift = -currentSlide * width;

    if (currentSlide < (max - 1)) {
        currentSlide++;
        arrowLeft.removeAttribute("disabled");
    }

    else {
        arrowRight.setAttribute("disabled", "true");
    }

    teamItems.style.transform = `translateX(${shift}px)`;
})

arrowLeft.addEventListener('click', () => {
    let shift = -(currentSlide - 1) * width;

    if (currentSlide > -1) {
        currentSlide--;
        arrowRight.removeAttribute("disabled");
    }

    if (currentSlide <= 0) {
        arrowLeft.setAttribute("disabled", "true");
    }

    teamItems.style.transform = `translateX(${shift}px)`;
})