'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge
ctx.lineWidth = 2;

// first line
ctx.strokeStyle = 'navy';
ctx.moveTo(200, 100);
ctx.lineTo(350, 100);
ctx.stroke();

ctx.beginPath();

// second line
ctx.strokeStyle = 'green';
ctx.moveTo(350, 100);
ctx.lineTo(350, 200);
ctx.stroke();

ctx.beginPath();

// third line
ctx.strokeStyle = 'orange';
ctx.moveTo(350, 200);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath();

// fourth line
ctx.strokeStyle = 'lime';
ctx.moveTo(200, 200);
ctx.lineTo(200, 100);
ctx.stroke();

// rect and fill 
ctx.fillStyle = 'lightblue';
ctx.moveTo(200, 100);
ctx.fillRect(200,100,149,99);