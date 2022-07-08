'use strict';

//navbar variables 

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

//navToggle function
const navTosggleFunc = function () {nav.classList.toggle('active');}

navMenuBtn.addEventListener('click', navTosggleFunc);
navCloseBtn.addEventListener('click', navTosggleFunc);