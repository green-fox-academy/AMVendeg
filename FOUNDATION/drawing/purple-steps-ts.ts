'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


function drawSquare(rectQty, rectSize) {

    for (let i = 0; i < rectQty; i++){
        
            ctx.fillStyle = 'purple';
            ctx.fillRect(i * rectSize, i * rectSize, rectSize, rectSize);
    }  
}

drawSquare(20,10);

// function első paramétere a négyzetek száma: rectQty
// function második paramétere a négyzetek mérete: rectSize