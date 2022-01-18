'use strict';

// Write a function that checks if the array contains "7"
// If it does, return "Hoorray" otherwise return "Noooooo"

let numArray: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(array: number[]) {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return `Hoorray`;
    } else {
      return `Noooo`;
    }
  }
}

console.log(containsSeven(numArray));
// The output should be: "Noooooo"


// Do this again with a different solution using different list functions!
const iAmLookingForThisNumber: number = 7;

function containsNumber(array: number[]) {
  if (array.some((element: number) => element === iAmLookingForThisNumber)) {
    return `Hoorray`;
  } else {
    return `Noooo`;
  }
}
console.log(containsNumber(numArray));

