'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const imgsList = document.querySelector('.gallery__list');

function clickHandler() {
  event.preventDefault();

  if (event.target.tagName === 'IMG') {
    largeImg.src = event.target.closest('a').href;
  }
}

imgsList.addEventListener('click', clickHandler);
