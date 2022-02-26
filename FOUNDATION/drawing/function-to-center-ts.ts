'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas

let canvasWidth: number = 600;
let canvasHeight: number = 400;

// x and y the starting point
function singleLineToCenter(x:number, y:number) {

    ctx.moveTo(x, y);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'turquoise';
    ctx.stroke();
}

// paraméterei: honnan indul a vonal
// singleLineToCenter(100, 30);



// // Fill the canvas with lines from the edges (every 20 px) to the center

function fillCanvasWithLines(numberOfLines: number) {

    // i * 20, mert 20 "sort" hozok létre
    for(let i: number = 0; i * 20 <= canvasWidth; i++) {

        // fentről lefelé húzom a vonalakat végig az x tengelyen
        singleLineToCenter(i * 20, 0);

        // alulról felfelé húzom a vonalakat végig az x tengelyen
        singleLineToCenter(i * 20, canvasHeight);

        // balról jobbra húzom a vonalakat y tengelyen
        singleLineToCenter(0, i * 13.333);
        
        // jobbról balra húzom a vonalakat y tengelyen
        singleLineToCenter(canvasWidth, i * 13.333);
    }
}

fillCanvasWithLines(20);