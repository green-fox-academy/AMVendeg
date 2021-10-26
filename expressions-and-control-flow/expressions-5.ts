// if conditions and cheat on exams, list of numbers till 500, multiple table 15

'use strict';

import { count } from "console";

let b: number = 13;
let output2: string = "";

if (b > 10 && b < 20) {

    output2 = "Sweet!";
    console.log(output2);

} else if (b < 10) {

    output2 = "Less!";
    console.log(output2);

} else {
    output2 = "More!";
    console.log(output2);
}




// következő feladat


let d: any =  8;
let time: number = 230;
let output3: string = '';

if (d/4 && time < 200) {

    console.log(output3 = "check");

} else if (time > 200) {

    console.log(output3 = "Time out!");

} else {

    console.log(output3 = "Run Forest, run!");

}





// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"


let notCheatOnExam: string = "I won't cheat on the exam!";

for (let i: number = 0; i <= 100; i++) {

    console.log(notCheatOnExam);                               // prints 100x "I won't cheat on the exam!"
   // console.count(notCheatOnExam);                          // ellenőrzés
 
}




// Create a program that prints all the even numbers between 0 and 500

for (let listOfNumbers: number = 0; listOfNumbers <= 500; listOfNumbers++) {                // listázza 500-ig a számokat, az egyenlőség jel is kellett hozzá :D 

    console.log(listOfNumbers);

}








// ---------------------------------- multiple table




// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150


let myNumber: number = 15;
let multipleNum: number = 0;


for (myNumber = 1;  myNumber <= 10; myNumber++) {

    let multipleSolution: number = ++multipleNum * 15;
    console.log(multipleNum + " * " + 15 + " = " + multipleSolution);

}

// a szorzótáblánál nem értem, hogy miért nem fogadja el a myNumbert, csak a 15-t. Még nem jöttem rá.
// de az eredmény console-ban az ami kell. :) 


