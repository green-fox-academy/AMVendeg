import { Bird } from "./bird";
import { Reptile } from "./reptiles";
import { Dinosaurs } from "./dinosaurs";

const reptile = new Reptile('Crocodile');
const mammal = new Dinosaurs('T-REX');
const bird = new Bird('Eagle');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);

