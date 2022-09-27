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

// CREAR GRID DE PRODUCTOS

const cardsContainer = document.getElementsByClassName('cards-container')[0];

const productList = [];
productList.push({
  name: 'Bicicleta',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Pantalla',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Computadora',
  price: 250,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Teclado',
  price: 50,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProducts(arr){
    for (product of arr){
      const productCard = document.createElement('div')
      productCard.classList.add('product-card')
      
      const img = document.createElement('img')
      img.setAttribute('src', product.image);
      
      const productInfo = document.createElement('div')
      productInfo.classList.add('product-info')
      
      const productInfoDiv = document.createElement('div')
      
      const productPrice = document.createElement('p')
      productPrice.innerHTML = '$' + product.price
      
      const productName = document.createElement('p')
      productName.innerHTML = product.name
      
      const productInfoFigure = document.createElement('figure')
      
      const productImgCart = document.createElement('img')
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
      
    productInfoFigure.appendChild(productImgCart);
    
    productInfoDiv.append(productPrice, productName)
    
    productInfo.append(productInfoDiv, productInfoFigure);
    
    productCard.append(img, productInfo);
    
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);