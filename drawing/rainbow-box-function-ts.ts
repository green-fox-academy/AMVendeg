'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.

// I am working on the last one:
// Create a loop that fills the canvas with a rainbow of colored squares.


let rectSize: number = 60;
let canvasWidth: number = 600;
let canvasHeight: number = 400;

function drawSquare(rectSize, fillColor) {
        
    ctx.fillStyle = fillColor;
    ctx.fillRect((canvasWidth / 2) - (rectSize / 2), (canvasHeight / 2) - (rectSize / 2), rectSize, rectSize);   
}

drawSquare(rectSize,'turquoise');