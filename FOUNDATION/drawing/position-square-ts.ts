'use strict';

import { resolveTxt } from "dns";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!



function drawSquare(rectQty, rectSize) {

    for (let i = 0; i < rectQty; i++){
        
            ctx.fillStyle = 'turquoise';
            ctx.fillRect(i * rectSize, i * rectSize, rectSize, rectSize);
    }  
}

drawSquare(3,50);

// function első paramétere a négyzetek száma: rectQty
// function második paramétere a négyzetek mérete: rectSize