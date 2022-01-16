// create function with say the number give is Armstrong number or not

let number: number;

function isArmstrongNumber(number: number): void {
let digitsToArr = number.toString().replace(/\D/g, '0').split('').map(Number);
let temp: number = 0;
  for (let i: number = 0; i < digitsToArr.length; i++) {
    temp += Math.pow(digitsToArr[i], digitsToArr.length);
  }
  if (number === temp) {
    console.log(`${number} is an Armstrong number`);
  }
  else {
    console.log(`${number} is not an Armstrong number`);
  }
}

isArmstrongNumber(1632);
isArmstrongNumber(131072);
