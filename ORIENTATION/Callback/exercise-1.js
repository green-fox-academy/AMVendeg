// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

'use strict';

let numbers = [1, 2, 3];

const mapWith = (array, callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  // OR: with map:
  output = array.map((e) => callback(e)); 
  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:
console.log(mapWith(numbers, addOne));
//expected result: [2, 3, 4]


// Exercise 2:
// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];






//console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']