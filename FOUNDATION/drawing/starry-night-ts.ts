'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let canvasWidth: number = 600;
let canvasHeight: number = 400;

// x, y w, h
ctx.fillRect(0, 0, canvasWidth, canvasHeight);
ctx.fillStyle = 'black';

// function for random colors
function randomColor() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = Math.random();
    return  `rgba(${r}, ${g}, ${b}, ${a})`;
}

// function for random grey
function randomGrey() {
    let r = Math.round(Math.random()*20);
    let g = Math.round(Math.random()*20);
    let b = Math.round(Math.random()*20);
    let a = Math.random();
    return  `rgba(${r}, ${g}, ${b}, ${a})`;
}

// small rectangles with random colors
for (let i = 0; i < 1000; i++) {
    let beginX: number = 3;
    let beginY: number = 3;

    if (i === i / 20) {

        ctx.fillStyle = randomGrey();
        ctx.fillRect(i * beginX * Math.random(), i * beginY * Math.random(), 10, 10);
    
    } else {

        ctx.fillStyle = randomColor();
        ctx.fillRect(i * beginX * Math.random(), i * beginY * Math.random(), 10, 10);

    }
}





