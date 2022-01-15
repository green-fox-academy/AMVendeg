// Parrot is an Animal
// The healing cost should be a random number between 4 and 10

import { Animal } from "./animal";

class Parrot extends Animal {
    max: number = 10;
    min: number = 4;
    healCost: number = Math.floor(Math.random() * this.max - this.min +  1 ) + this.min;
}

export { Parrot };