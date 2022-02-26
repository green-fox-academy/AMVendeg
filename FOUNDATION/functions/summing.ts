// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter


function sum(numberTo: number) {
    
    let sumOfNumbers: number = 0;

    for (let i: number = 0; i < numberTo; i++) {
       sumOfNumbers += i;
    }
    return sumOfNumbers;
}

console.log(sum(13));