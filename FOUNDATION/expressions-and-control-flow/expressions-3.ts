// fav number, swap, bmi


'use strict';

// fav nuber kiirás
let favNumber: number = 913;
console.log("My fav number number is: " + favNumber);


// swap the values of these variables - változó értékének cseréje
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

console.log(numberToSwap1);
console.log(numberToSwap2);

numberToSwap1 = 2765;
numberToSwap2 = -276;

console.log(numberToSwap1);
console.log(numberToSwap2);


// bmi - muscle exercise

let massKing: number = 60;
let heightInM: number = 1.71;

console.log("Your BMI based on your datas is: " + (massKing / (heightInM * heightInM)) + ". It's ok for now, do not worry!");

// or 
console.log("Your BMI based on your datas is: " + (massKing / Math.pow(heightInM, 2))) + "Square it, i am Einstein :D";


