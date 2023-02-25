const imageListItems = [...document.querySelectorAll('.main-section--image-list li')]
const articleListItems = [...document.querySelectorAll('.hero-content-1--article-list li')]
const mobileNavToggle = document.querySelector('#mobileNavToggle')

let counter = 0

function handleRightBtn() {
  if(counter === 2) return

  imageListItems[counter].setAttribute('aria-hidden', 'true')
  articleListItems[counter].setAttribute('aria-hidden', 'true')
  counter++
  imageListItems[counter].setAttribute('aria-hidden', 'false')
  articleListItems[counter].setAttribute('aria-hidden', 'false')
}

function handleLeftBtn() {
  if(counter === 0) return

  imageListItems[counter].setAttribute('aria-hidden', 'true')
  articleListItems[counter].setAttribute('aria-hidden', 'true')
  counter--
  imageListItems[counter].setAttribute('aria-hidden', 'false')
  articleListItems[counter].setAttribute('aria-hidden', 'false')
}

mobileNavToggle.addEventListener('click', toggleNavigation)

function toggleNavigation() {
  const navIsVisible = this.getAttribute('aria-expanded') === 'true' ? true : false 

  this.setAttribute('aria-expanded', !navIsVisible)

  if(navIsVisible) {
   this.children[0].setAttribute('src', './images/icon-hamburger.svg')
   this.children[0].setAttribute('alt', 'hamburger menu icon')
   this.children[0].setAttribute('height', '18')
  }
  else {
   this.children[0].setAttribute('src', './images/icon-close.svg')
   this.children[0].setAttribute('alt', 'close button')
   this.children[0].setAttribute('height', '25')
  }
}

