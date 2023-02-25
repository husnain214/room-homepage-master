const imageListItems = [...document.querySelectorAll('.main-section--image-list li')]
const articleListItems = [...document.querySelectorAll('.hero-content-1--article-list li')]
const hamburgerBtn = document.querySelector('#hamburgerBtn')

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

hamburgerBtn.addEventListener('click', e => {
  e.target.setAttribute('aria-expanded', 'true') 
})

