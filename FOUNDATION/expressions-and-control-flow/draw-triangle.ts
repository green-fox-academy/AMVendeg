'use strict';

let lineCounter: number = 4;
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i = 0; i <= lineCounter; i++) {
    let drawTriangle = '';

    for (let k = 1; k < (i + 1); k++) {
        drawTriangle += '*';
    }

    console.log(drawTriangle);
    
}

