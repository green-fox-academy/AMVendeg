'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop
let x1: number = 155;
let y1: number = 165;
let canvasWidth: number = 600;
let canvasHeight: number = 400;

function drawSingleLine(x1, y1, canvasWidth, canvasHeight) {
    ctx.beginPath;
    ctx.moveTo(x1, y1);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2);
    ctx.strokeStyle = "turquoise";
    ctx.stroke();
    ctx.beginPath;
}

for (let i = 0; i < 3; i++) {

    drawSingleLine(i*x1, i*y1, canvasWidth, canvasHeight);
}


