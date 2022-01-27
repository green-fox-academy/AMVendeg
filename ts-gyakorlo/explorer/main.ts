import { SpaceCraft } from "./spaceCraft";
import { SpaceLocation } from './SpaceLocation';
 
let spaceShuttle = new SpaceCraft('Endurance', 17500);

let moon = new SpaceLocation('Moon', 384400);
let mars = new SpaceLocation('Mars', 225000000);

console.log(spaceShuttle.printDaysToLocation(moon));
console.log(spaceShuttle.printDaysToLocation(mars));
