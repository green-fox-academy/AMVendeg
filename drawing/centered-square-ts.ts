'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas

// fillRect első két paramétere a kiidulási pont:
// megfelezem a canvast horizontálisan és vertikálisan 
// --> megvan a canvas középpontja, ezután kivonom belőle a square méreteinek felét, 
// mert nem a középpontból rajzolom a négyzetet, hanem a négyzet van a középpontban

// változókat hoztam létre, így nekem egyértelműbb és bármilyen méretű négyzettel, illetve téglalappal működik

let squareWidth: number = 10;
let squareHeight: number = 20;
let canvasWidth: number = 600;
let canvasHeight: number = 400;

ctx.fillStyle = 'green';
ctx.fillRect((canvasWidth / 2) - (squareWidth / 2), (canvasHeight / 2) - (squareHeight / 2), squareWidth, squareHeight);