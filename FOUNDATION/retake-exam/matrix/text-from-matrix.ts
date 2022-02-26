let inputMatrix: string[][] = [
  ["n", "x"],
  ["m", "o"]
];
let emptyMatrix: string[][] = [[]];

export function textFromMatrix(inputMatrix: string[][]): string {

  let output: string[] = [];
  let error: string = '';
  if (inputMatrix.length === 0) {
    return error = 'The matrix is empty';

  } else {
    for (let i: number = 0; i < inputMatrix.length; i++) {
      if (i % 2 === 0) {
        for (let j: number = 0; j < inputMatrix[i].length; j++) {
          if (j % 2 == 0) {
            output.push(inputMatrix[i][j]);
          }
        }
      }
     
      if (i % 2 !== 0) {
        for (let j: number = 0; j < inputMatrix[i].length; j++) {
          if (j % 2 !== 0) {
            output.push(inputMatrix[i][j]);
          }
        }
      }
    }
  }
  return output.join('');
}

console.log(textFromMatrix(inputMatrix));
console.log(textFromMatrix(emptyMatrix));
