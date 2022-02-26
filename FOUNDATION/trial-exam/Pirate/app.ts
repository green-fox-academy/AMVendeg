import { Pirate } from "./pirate";
import { Ship } from "./ship";

let myPirate = new Pirate('Davy Jones');
let myPirate2 = new Pirate('Jack Sparrow');
myPirate.isCaptain = true;
myPirate.hasWoodenLeg = true;
console.log(myPirate.isCaptain); // true
console.log(myPirate.healthPoints); // 10
myPirate.work(); // -5
console.log(myPirate.healthPoints); // 5
console.log(myPirate.toString()); // Hello, I'm Davy Jones. I have a wooden leg and 10 golds.


let myPirateShip = new Ship('Bolygó Hollandi');
myPirateShip.addPirate(myPirate);
console.log(myPirateShip.listOfPirates);

myPirateShip.addPirate(myPirate);
myPirateShip.addPirate(myPirate2);
myPirateShip.getCrewSize();

myPirate2.goldAmount = 3;
console.log(myPirateShip.listOfPirates);
console.log(myPirateShip.getPoorPirates());

console.log(myPirateShip.getGolds());