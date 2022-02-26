'use strict';
// Create a function called "appendA()" that adds "a" to every string in the "animals" list
// The parameter should be a list
// The output should be: "koala", "panda", "zebra" ...


let animalList: string[] = ['koal', 'pand', 'zebr', 'anacond', 'bo', 'chinchill', 'cobr', 'gorill', 'hyen', 'hydr', 'iguan', 'impal', 'pum', 'tarantul', 'pirahn'];

// first solution with for loop
function appendA(array: string []): string[] {
  for (let i: number = 0; i < array.length; i++) {
    array[i] = array[i] + 'a';
  }
  return array;
}

// second solution arrow function (map - concat)
function appendB(array: string[]): string[] {
  let animalString = array.map(e => e.concat('B'));
  return animalString;
}

console.log(appendA(animalList));
console.log(appendB(animalList));
