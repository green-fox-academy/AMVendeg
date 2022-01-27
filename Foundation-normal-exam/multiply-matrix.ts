// Write a method that takes a matrix of non-negative integers 
// (any matrix is allowed, including square matrices) as a parameter.
// multiply each odd (1,3,5,7,9,...) number by 2 in each odd indexed row
// multiply each even (2,4,6,8,10,...) number by 2 in each even indexed row
// use the same indexing which we use in most programming language (starting with 0) 
// and remember that 0 is also an even number. 
// See the example for better understanding and ask questions if it is still unclear.

// Write at least 2 different unit tests, one that tests normal operation and one that tests unexpected input.


let input: number[][] = [
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]

// multiple all elements - need if to odd and even
function multipleMatrix(matrix: number[][]): number[][] {

  if (matrix.length === 0) {
    console.log('The matrix has no length');
  } else {
    for (let i: number = 0; i < matrix.length; i++) {
      matrix[i] = matrix[i].map(x => (i % 2 === 1 && x % 2 === 1) ? x * 2:x);
      matrix[i] = matrix[i].map(x => (i % 2 === 0 &&  x % 2 === 0) ? x * 2:x);     
    }
    return matrix;
  }
}
console.log(multipleMatrix(input));

// megoldás for loop-al

// export function MultipleItemsInAMatrix(matrix: number[][]): number[][] {
//   for (let i: number = 0; i < matrix.length; i++) {
//     for (let j: number = 0; j < matrix[i].length; j++) {
//       if (i % 2 === 1 && matrix[i][j] % 2 === 1) {
//         matrix[i][j] *= 2;
//       }
//       if (i % 2 === 0 && matrix[i][j] % 2 === 0) {
//         matrix[i][j] *= 2;
//       }
//     }
//   }
//   return matrix;
// }

