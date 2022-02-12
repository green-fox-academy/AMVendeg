// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
// If the first p has an 'apple' class, replace cat's content with 'dog'
// Make apple red by adding a .red class
// Make balloon less balloon-like (change its shape)

'use strict';

const pList: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p');
// console.log(pList);

let myApple: Element = document.querySelector('.apple');
let myCat: Element = document.querySelector('.cat');

for (let i: number = 0; i < pList.length; i++) {
  if (pList[i].textContent === 'dolphin') {
    myApple.textContent = 'pear';
  }
  if (pList[0].classList.contains('apple')) {
    myCat.textContent = 'dog';
  }
  if (pList[i].classList.value === 'apple') {
    pList[i].classList.add('red');
  }
  if (pList[i].classList.value === 'balloon') {
    let smallBalloon: HTMLParagraphElement = pList[i];
    //pList[i].classList.remove('balloon');
    smallBalloon.textContent = 'baloon';
    smallBalloon.setAttribute('style', 'color');
    smallBalloon.style.color = 'grey';
  }
}