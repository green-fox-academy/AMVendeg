'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop

// ha jól értem a feladatot, egy 50 hosszúságú horizontális vonalat rajzoljak legalább hármat

let x1: number = 70;
let y1: number = 80;
let x2 = 50;
let y2 = y1;


function drawHorizontalLine(x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y1);
    ctx.strokeStyle = "turquoise";
    ctx.stroke();
    
}

for (let i = 0; i <= 3; i++) {

    drawHorizontalLine(x1, i*y1, x2, y1);
}
