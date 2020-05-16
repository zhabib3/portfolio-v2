// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.nav-item');

// Set Initial state of the menu
let showMenu = false;


const toggleMenu = () => {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  menuBranding.classList.toggle('show');
  navItems.forEach((item) => {
    item.classList.toggle('show');
  });

  // Reset Menu Toggle
  showMenu = !showMenu;
}

menuBtn.addEventListener('click', toggleMenu);