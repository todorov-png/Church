'use strict';

const burgerMenu = document.querySelector(".menu-burger__header"),
      headerNav = document.querySelector(".header__nav"),
      links = headerNav.querySelectorAll(".menu__item");

burgerMenu.onclick = menu;

links.forEach((elem)=>{
  elem.addEventListener('click', ()=> {
    const active = headerNav.querySelector(".active");
    active.classList.remove('active');
    elem.classList.add('active');
    menu();
  });
});

function menu() {
  burgerMenu.classList.toggle("open-menu");
  headerNav.classList.toggle("open-menu");
}