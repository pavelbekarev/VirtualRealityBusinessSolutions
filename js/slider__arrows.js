'use strict'
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");
const sliderItems = document.querySelector(".slider__items");

let current = 1;
let maxSlide = 6;
let widthSlide = 370;

rightArrow.addEventListener("swipe", () => {
    let shift = -current * widthSlide;

    if (current < (maxSlide - 1)) {
        current++;
        leftArrow.removeAttribute("disabled");
    }
    
    else {
        rightArrow.setAttribute("disabled", "true");
    }

    console.log(current);

    sliderItems.style.transform = `translateX(${shift}px)`;
})

leftArrow.addEventListener("swiped", () => {
    let shift = -(current-1) * widthSlide;

    if (current > -1) {
        current--;
        rightArrow.removeAttribute("disabled");
        // console.log("current изменился!")
    }

    
    if (current <= 0)
    {
        leftArrow.setAttribute("disabled", "true");
        // console.log("current не изменился!")
    }

    sliderItems.style.transform = `translateX(${shift}px)`;
})
