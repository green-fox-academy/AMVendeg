
import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

// function print(dominoes: Domino[]) {
//   dominoes.forEach(function (value) {
//     console.log(value);
//   });
// }

let dominoes = initializeDominoes();

function snakeDomino(dominoes: Domino[]) {
let tempArr = dominoes[dominoes.length - 1];
dominoes.length = dominoes.length -1;
let output: Domino[] = [];
output.push(tempArr);

  for (let i: number = 0; dominoes.length > 0; i++) {
    for (let j: number = 0; j < dominoes.length; j++) {
      if (tempArr.getValues()[1] === dominoes[j].getValues()[0]) {
        tempArr = dominoes[j];
        output.push(dominoes[j]);
        dominoes.splice(j,1);
        
      }
    }
  }
  return output;
}

console.log(snakeDomino(dominoes));