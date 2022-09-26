const menuEmail = document.getElementsByClassName('navbar-email')[0];
const desktopMenu = document.getElementsByClassName('desktop-menu')[0];

function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
