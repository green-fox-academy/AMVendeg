'use strict';

// on the click of the button
// count the items in the list
// and display the result in the result element

let listCounter = 0;
const ulList = document.querySelectorAll('li');
const button = document.querySelector('button');
const result = document.querySelector('.result');

const countListElements = () => {
  for (let i = 0; i < ulList.length; i++) {
    listCounter++;
  }
  result.innerHTML = listCounter;
};

button.addEventListener('click', countListElements);


