// calculate total sum of a matrix

let smallMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

let sumLineArr: number[] = [];
let matrixTotal: number = 0;
for (let i: number = 0; i < smallMatrix.length; i++) {
  for (let j: number = 0; j < smallMatrix.length; j++) {
    if (j <= smallMatrix[i].length) {
      sumLineArr.push(smallMatrix[i][j]);
      matrixTotal = sumLineArr.reduce((a, b) => a + b, 0);
    }
  }
}
console.log(matrixTotal);


// just th line sum
let tinyMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];
let sumLine: number = tinyMatrix[0].reduce((a, b) => a + b, 0);
console.log(sumLine);