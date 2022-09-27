const menuEmail = document.getElementsByClassName("navbar-email")[0];
const menuHamburgerIcon = document.getElementsByClassName("menu")[0];
const menuCarritoIcon = document.getElementsByClassName(
  "navbar-shopping-cart"
)[0];
const desktopMenu = document.getElementsByClassName("desktop-menu")[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const aside = document.getElementsByClassName("product-detail")[0];

function toggleDesktopMenu() {
  
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    // sacar el aside
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    // sacar el aside
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuEmailClosed = menuEmail.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    // sacar el mobile menu
    mobileMenu.classList.add("inactive");
  }

  if (!isMenuEmailClosed) {
    // sacar el mobile menu
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCart);
