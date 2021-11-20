'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!


// function for random colors
function randomColor() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = Math.random();
    return  `rgba(${r}, ${g}, ${b}, ${a})`;
}

let beginX: number = 100;
let beginY: number = 70;

for (let i = 0; i < 4; i++) {
    
    ctx.fillStyle = randomColor();
    ctx.fillRect(i*beginX, i*beginY, Math.random()*100, Math.random()*100);
}