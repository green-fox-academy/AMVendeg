'use strict';

// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

let numbers = [54, 23, 66, 12];

console.log(numbers[2]+numbers[3]);             
// ha szóközt teszek az összeadásba, akkor nem működik, print: 66+12 = 78, amennyiben úgy értelmezem ahogy a tömb működik, vagyis a nulladik elem az első


// ha nem úgy értelmezem hogy 0 az első elem, hanem szigorúan, ahogy látom, akkor:

console.log(numbers[1]+numbers[2]);   // print 23 + 66 = 89 

