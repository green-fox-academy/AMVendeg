// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

// first soluiton
let numbers = [1, 2, 3, 8, 5, 6].map(function(e) {
  if (e === 8) {
    return e / 2;
  } 
  return e;
});
console.log(numbers[3]);





