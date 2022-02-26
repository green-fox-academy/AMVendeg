// Cat is an Animal
// The healing cost should be a random number between 0 and 6

import { Animal } from "./animal";

class Cat extends Animal {
    max: number = 6;
    min: number = 1;
    healCost: number = Math.floor(Math.random() * this.max - this.min +  1 ) + this.min;
}

export { Cat };