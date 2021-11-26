'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

// I modified the html canvas to 500x500

function drawChesstable(size, rectSize) {

    for (let i: number = 0; i <= size; i++) {

        for (let j: number = 0; j <= size; j++) {

            ctx.fillStyle = 'white';
            ctx.fillStyle = 'black';
            
            if ((i + j) % 2 === 0) {
            
                ctx.fillStyle = 'steelblue';
            
            } else ctx.fillStyle = 'white';


            ctx.fillRect(i * rectSize + i * 1, j * rectSize + j * 1, rectSize, rectSize);
        }
    }
}

drawChesstable(49,49);