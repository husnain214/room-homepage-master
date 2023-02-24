const imageList = document.querySelector('.main-section--row-1--image-list')
const articleList = document.querySelector('.main-section--article-list')

const imageListItems = imageList.children
const articleListItems = articleList.children

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