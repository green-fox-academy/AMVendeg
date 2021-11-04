

 let matrix: string [][] = [];
 const matrixLength: number = 4;                         // lehet const mert nem fog változni

 for (let i = 0; i < matrixLength; i++) {                // sor

   matrix[i] = [];                                       // i-dik sorba létrehoz egy tömböt

  for (let j = 0; j < matrixLength; j++) {

      if (i === j) {
         matrix[i].push('1');
      } else  {
      
         matrix[i].push('0');                             // mindegyik tömbbe belepushol egy nullát

        }
  }
}

let mapMatrix = matrix.map((e: string[]) => e.join(' '));
   
console.log(mapMatrix.join('\n'));

