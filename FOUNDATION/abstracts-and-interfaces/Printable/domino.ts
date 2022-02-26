// Create a new class called Domino that has two integer fields that represents the two sides of a domino
// Implement this interface on the Domino and Todo classes
// The domino should have the following string representation: Domino A side: 3, B side: 2

import { PrintableInterface } from "./printable";


class Domino implements PrintableInterface {
  upperSide: number;
  downSide: number;

  constructor (upperSide: number, downSide: number) {
    this.upperSide = upperSide;
    this.downSide = downSide;
  }

  printAllFields(): void {
      console.log(`Domino A side: ${this.upperSide}, B side: ${this.downSide}`);
  }

}

export { Domino };

let myDomino = new Domino(3,2);
myDomino.printAllFields();
