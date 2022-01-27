// matrix practice
// reversed diagonal matrix
// [ [ 0, 0, 0, 1 ], [ 0, 0, 1, 0 ], [ 0, 1, 0, 0 ], [ 1, 0, 0, 0 ] ]

 let ownMatrix: number[][] = [];
 let matrixLength: number = 4;

 for (let i: number = 0; i < matrixLength; i++) {
   ownMatrix[i] = [];

   for (let j: number = 0; j < matrixLength; j++) {
     // matrix hossza, minusz az aktuális sor száma -1, mert a tömb hossza -1 az a tömb utolsó eleme
     if(j === matrixLength -i - 1) {
       ownMatrix[i][j] = 1;
     } else {
       ownMatrix[i][j] = 0;
     }
   }
 }
 console.log(ownMatrix);


 
// diagonal matrix:
//  [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]

let diagonalmatrix: number[][] = [];
let diagonalMatrixLength: number = 4;

for (let i: number = 0; i < diagonalMatrixLength; i++) {
  diagonalmatrix[i] = [];

  for (let j: number = 0; j < diagonalMatrixLength; j++) {
    if(j === i) {
      diagonalmatrix[i][j] = 1;
    } else {
      diagonalmatrix[i][j] = 0;
    }
  }
}
console.log(diagonalmatrix);


// counting matrix
//[ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 2, 3, 4 ] ]
let countMatrix: number[][] = [];
let lineCounter: number = 4;

for (let i: number = 0; i < lineCounter; i++) {
  countMatrix[i] = [];

  for (let j: number = 0; j < countMatrix.length; j++) {
    countMatrix[i][j] = j + 1;
  }
}
//console.log(countMatrix);


//[ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10, 11 ], [ 12, 13, 14, 15 ] ]
// let countMatrix2: number[][] = [];
// let lineCounter2: number = 4;

// for (let i: number = 0; i < lineCounter2; i++) {
//   countMatrix2[i] = [];

//   for (let j: number = 0; j < lineCounter2; j++) {
//     countMatrix2[i][j] = j + 1;
//   }
// }
// console.log(countMatrix2);




