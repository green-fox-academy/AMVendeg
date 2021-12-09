'use strict';

// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

export function fizzBuzz() {
  // write your code here for Gradescope testing

  let fizzString: string = 'Fizz';
  let buzzString: string = 'Buzz';
  let fizzBuzzString: string = 'FizzBuzz';

    for (let i: number = 0; i <= 100; i++) {

        if (i % 3 === 0) {
            console.log(fizzString);

        } else if (i % 5 === 0) {
            console.log(buzzString);

        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(fizzBuzzString);

        } else {
            console.log(i);
            
        }
    }
}

console.log(fizzBuzz());

