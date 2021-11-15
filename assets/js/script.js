/* jshint esversion:8 */

// Variables
const menu = document.querySelector('#menu');
const overlay = document.querySelector('#overlay');
const btnCloseMenu = document.querySelectorAll('#nav_element_1');
const btnOpenMenu = document.querySelector('#hamburger');

document.addEventListener('DOMContentLoaded', function () {

  //Open menu
  btnOpenMenu.addEventListener('click', openMenu);



  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.classList.contains('nav_on_click')) {
      closeMenu();
    }
  });
});



/**
 * Open instructions modal window
 */
const openMenu = function () {
  menu.classList.remove('nav_on_click');
  overlay.classList.remove('overlay--hidden');
};