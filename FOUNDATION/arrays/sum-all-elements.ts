// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

// let numbers = [3, 4, 5, 6, 7];


let numbers = [3, 4, 5, 6, 7];

// első megoldás, de van ennél jobb is h ne kelljen kiírni a tömb összes elemét
console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]);
 
// másik megoldás reduce-al
let sum = numbers.reduce((a, b) => a + b);
 
console.log(sum);