/* jshint esversion:8 */

// Variables
const menu = document.querySelector('#menu');
const overlay = document.querySelector('#overlay');
const about = document.querySelector('#nav_element_1');
const services = document.querySelector('#nav_element_2');
const projects = document.querySelector('#nav_element_3');
const contact = document.querySelector('#nav_element_4');
const btnOpenMenu = document.querySelector('#hamburger');

document.addEventListener('DOMContentLoaded', function () {

  //Open menu
  btnOpenMenu.addEventListener('click', openMenu);


  about.addEventListener('click', closeMenu);
  services.addEventListener('click', closeMenu);
  projects.addEventListener('click', closeMenu);
  contact.addEventListener('click', closeMenu);

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.classList.contains('nav_on_click')) {
      closeMenu();
    }
  });
});



/**
 * Open menu
 */
const openMenu = function () {
  menu.classList.remove('nav_on_click');
  overlay.classList.remove('overlay--hidden');
};

/**
 * Close menu
 */
const closeMenu = function () {
  menu.classList.add('nav_on_click');
  overlay.classList.add('overlay--hidden');
};