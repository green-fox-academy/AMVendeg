import { AnimalShelter } from "./animal-shelter";
import { Cat } from "./cat";
import { Dog } from "./dog";
import { Parrot } from "./parrot";

let myShelter = new AnimalShelter;
myShelter.rescue(new Cat('Misi'));
myShelter.rescue(new Parrot('Sexy'));
myShelter.rescue(new Dog('Torta'));
myShelter.animals[1].feedWithSpoiledFood();

console.log(myShelter.heal());
myShelter.addAdopter('Masni');


// console.log(myShelter.animals);
console.log(myShelter.toString());
