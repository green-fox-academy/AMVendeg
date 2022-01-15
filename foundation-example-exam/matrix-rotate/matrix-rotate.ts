// and returns a matrix which elements are rotated 90 degrees clockwise.
// output: 
// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ] 
// ]

let myArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
] 
// array.slice() = makes a shallow copy of an array

function rotateMatrix(matrix: number[][]): number[][] {
  let newMatrix: number[][] = matrix.map((array: number[]) => array.slice());
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  return newMatrix;
}

console.log(rotateMatrix(myArray));
