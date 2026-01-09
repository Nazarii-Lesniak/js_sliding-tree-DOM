'use strict';

const typeOfProduct = document.querySelectorAll('li');

typeOfProduct.forEach((list) => {
  const span = document.createElement('span');

  list.prepend(span);
  span.append(span.nextSibling);
});

const mainUnorderedList = document.querySelector('.tree');

mainUnorderedList.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();

  if (eventClick.target.tagName !== 'SPAN') {
    return;
  }

  const nestedList = eventClick.target.parentNode.querySelector('ul');

  nestedList.hidden = !nestedList.hidden;
});
