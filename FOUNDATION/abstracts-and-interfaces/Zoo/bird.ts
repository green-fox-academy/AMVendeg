// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc. 
// We need to define specific fields and methods for each. 
// For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich. 
// Write down at least 2 of field and/or method what is common in each kind.
// Most of the Reptiles breed() by laying eggs too, it is common with Birds.

import { Animal } from "./animal";

class Bird extends Animal {
  bornFrom: string = 'egg';
  haveWings: boolean = true;
  notAfraidOfHeights: boolean = true;
  
  breed(): string {
    return `laying eggs`;
  }
}

export { Bird };