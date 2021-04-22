'use strict';

let slideIndex = 1;

showSlides(slideIndex);
setInterval(nextSlide, 20000);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider-item"),
      btns = document.getElementsByClassName("slider-banner__btn__active");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (let btn of btns) {
    btn.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
  }

  slides[slideIndex - 1].style.display = "block"; 
  btns[slideIndex - 1].style.backgroundColor = 'rgba(255, 255, 255, 1)';
}
