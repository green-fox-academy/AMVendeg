'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawSquare(rectQty: number, rectSize: number) {

    let rectStart: number = rectSize;

    for (let i:number = 0; i <= rectQty; i++) {

            ctx.fillStyle = 'purple';
            // x, y, size x, size y 
            ctx.fillRect(rectStart, rectStart, i * rectSize, i * rectSize);
            rectStart += rectSize * i;
            
    }  
}
// rectQty, rectSize
drawSquare(5,20);