webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

const menuBtn = document.querySelector('.header__hamburger');
const mainMenu = document.querySelector('.header__nav');

let menuOpen = false;

const menu = () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        mainMenu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        mainMenu.classList.remove('open');
        menuOpen = false;
    }
};

menuBtn.addEventListener('click', menu);

/***/ })
],[0]);