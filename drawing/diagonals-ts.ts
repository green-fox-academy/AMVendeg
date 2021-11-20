'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

let x1: number = 0;
let y1: number = 0;
let x2: number = 600;
let y2: number = 400;

function drawSingleLine(x1, y1, x2, y2) {
    ctx.beginPath;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.beginPath;
}

if (x1 === 0 && y1 === 0) {
    ctx.strokeStyle = 'blue';
    ctx.stroke();
} else ctx.strokeStyle = 'red';

// left to right diagonal
drawSingleLine(x1,y1,x2,y2);
// right to left diagonal
drawSingleLine(x2,y1,x1,y2);
