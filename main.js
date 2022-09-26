const menuEmail = document.getElementsByClassName('navbar-email')[0];
const desktopMenu = document.getElementsByClassName('desktop-menu')[0];
const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
const menuHamburgerIcon = document.getElementsByClassName('menu')[0];

function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
