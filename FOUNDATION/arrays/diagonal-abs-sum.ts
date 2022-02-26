// calculate given quare matrix diagonal sum absolute difference
// 1 2 3 
// 4 5 6 
// 9 8 9
// left to right diagonal sum 1+5+9=15
// right to left diagonal sum 3+5+9=17
// difference |15-17| = 2

let simplyMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

// IF THE MATRIX IS GIVEN - THIS IS THE SIMPLY WAY:
// let sumLeftDiagonal: number  = simplyMatrix[0][0] + simplyMatrix[1][1] + simplyMatrix[2][2];
// let sumRightDiagonal: number = simplyMatrix[0][2] + simplyMatrix[1][1] + simplyMatrix[2][0];
// console.log(sumLeftDiagonal);
// console.log(sumRightDiagonal);

// let absDiff: number = Math.abs(sumLeftDiagonal - sumRightDiagonal);
// console.log(absDiff);


// IF THE MATRIX SIZE COULD BE ANYTHING - FOR LOOP SOLUTION
let leftDiagonal: number[] = [];
let sumLeft: number = 0;
for (let i: number = 0; i < simplyMatrix.length; i++) {
  for (let j: number = 0; j < simplyMatrix[i].length; j++) {
    if (i === j ) {
      leftDiagonal.push(simplyMatrix[i][j]);
      sumLeft = leftDiagonal.reduce((a, b) => a + b, 0);
    }
  }
}
console.log(sumLeft);

let rightDiagonal: number[] = [];
let sumRight: number = 0;
for (let i: number = 0; i < simplyMatrix.length; i++) {
  for (let j: number = 0; j < simplyMatrix[i].length; j++) {
    if (j === simplyMatrix.length -1 - i) {
      rightDiagonal.push(simplyMatrix[i][j]);
      sumRight = rightDiagonal.reduce((a, b) => a + b, 0);
    }
  }
}
console.log(sumRight);

let absDiff: number = Math.abs(sumLeft - sumRight);
console.log(absDiff);