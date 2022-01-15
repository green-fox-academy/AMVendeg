// Dog is an Animal
// The healing cost should be a random number between 1 and 8

import { Animal } from "./animal";

class Dog extends Animal {
    max: number = 8;
    min: number = 1;
    healCost: number = Math.floor(Math.random() * this.max - this.min +  1 ) + this.min;
}

export { Dog };