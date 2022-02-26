// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers: number[] = [3, 4, 5, 6];

// first solution
numbers.reverse();
console.log(numbers);


// second solution
let tempNumbers: number [] = [];
for (let i: number = numbers.length; i > 0; i--) {
    tempNumbers.push(numbers[i]);
}
tempNumbers = numbers;

console.log(numbers);
