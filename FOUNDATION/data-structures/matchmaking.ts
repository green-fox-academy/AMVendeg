'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Expected output: ["Eve-Joe", "Ashley-Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

// function matchOnePair(girls: string[], boys: string[]): string {
//   let firstPair: string = `${girls[0]}-${boys[0]}`;
//   return firstPair;
// }
// console.log(matchOnePair(girls, boys));

let pairs: string = '';
function match(girls: string[], boys: string[]): string[] {
  let temp: string[] = [];
  for( let i: number = 0; i < girls.length; i++) {
    temp.push(girls[i],boys[i]);
  }
  return temp;
}

console.log(match(girls, boys));