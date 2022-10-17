const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]
/* Loader */
  function loader () {
    const loader = document.getElementById("loader")
    
    if  (loader) {
      setTimeout(() => {
        loader.style.display = "none"
      }, 3000)
    }
  }

  /*Dark theme */

  const darkTheme = document.getElementById("theme-button")

  darkTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if (darkTheme.classList.contains("bx-moon")) {
      darkTheme.classList.replace("bx-moon", "bx-sun")
    }else {
      darkTheme.classList.replace("bx-sun", "bx-moon")
    }
  })

  /* Menu carrito */

function cartMenu() {
  const cartToggle = document.getElementById('cart-shop')
  const cart = document.getElementById('cart')
  const cartClose = document.getElementById('cart-close')

  if (cartToggle) {
    cartToggle.addEventListener('click', function () {
      cart.classList.toggle('show-cart')
    })
  }

  if (cartClose) {
    cartClose.addEventListener('click', function () {
      cart.classList.remove('show-cart')
    })
  }
}

/* menu navegacion */

function navMenu() {
  const navToggle = document.getElementById('nav-toggle')
  const navMenu = document.getElementById('nav-menu')
  const navClose = document.getElementById('nav-close')
  const navLink = document.querySelectorAll('.nav__link')

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show-menu')
    })
  }

  if (navClose) {
    navClose.addEventListener('click', function () {
      navMenu.classList.remove('show-menu')
    })
  }

  function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
}




  document.addEventListener("DOMContentLoaded", function () {
    loader()
    cartMenu()
    navMenu()
  })


