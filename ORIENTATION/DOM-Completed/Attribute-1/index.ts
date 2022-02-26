// Write the image's url to the console.
// Replace the image with a picture of your favorite animal.
// Make the link point to the Green Fox Academy website.
// Disable the second button.
// Replace its text with 'Don't click me!'.

'use strict';

const animalPicture: HTMLImageElement = document.querySelector('img');
console.log('Greenfox logo picture', animalPicture.getAttribute('src'));

animalPicture.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1GAX6f2i8Mbt7C3sjRhSdyu1X0F5Np3w5g&usqp=CAU');

let link: Element = document.querySelector('a[href]');
link.setAttribute('link','https://www.greenfoxacademy.com/');

let secondBtn: Element = document.querySelector('.this-one');
secondBtn.remove();

let text: HTMLButtonElement = document.querySelector('button');
text.textContent = `Don't click me!`;
