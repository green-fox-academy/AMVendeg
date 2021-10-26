// next ones: variable-mutation, cuboid, second-in-a-day


let a: number = 3;
// make it bigger by 10
console.log(a + 10);            // prints 13


let b: number = 100;
// make it smaller by 7
console.log(b - 7);             // prints 93



let c: number = 44;
// double c's value
console.log(c*c);               // prints 1936



let d: number = 125;
// divide d's value by 5
console.log(d / 5);             // prints 25



let e: number = 8;
// what's the cube of e's value? // mit jelent az h cube of e? rájöttem: köb.
console.log(e*e*e);              // prints 512



let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1 > f2);           // prints false




let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
console.log((g2*g2) > g1);



let h: number = 1357988018575474;
let isDivideBy: number = h / 11;
// tell if 11 is a divisor of h (as a boolean)
console.log(Boolean( h / 11));                  // true
// or 
console.log(Boolean(isDivideBy));               //  true




let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
// console.log(i2*i2); ----- ellenőrzés
// console.log(i2*i2*i2);----- ellenőrzés
console.log(Boolean(i1 > (i2*i2) && i1 < (i2*i2*i2)));


let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean) */
console.log(Boolean(j / 3 || 5));




// CUBOID
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cubA: number = 13.3;
let cubB: number = 22.6;
let cubC: number = 9.1;
let cuboidSurface: number = 2 * (cubA*cubB + cubA*cubC + cubB*cubC);
let cuboidVolume: number = cubA * cubB * cubC;

console.log("The surface of the cuboid is: " + cuboidSurface);
console.log("The volume of the cuboid is: " + cuboidVolume);



