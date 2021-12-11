/*
Create Station and Car classes

Station
it stores how much gas is avaliable: gasAmount
it can refill a car: refill(car: Car):
decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
increases the car's gasAmount

Car
it stores how much gas is actually present: gasAmount
it stores the capacity of the tank: capacity
create a constructor for the Car class where you:
initialize gasAmount -> 0
initialize capacity -> 100
*/

import { Station } from './station';
import { Car } from './car';

let myCar = new Car();
let theStation = new Station();

console.log(`The station actual gas amount is: ${theStation.stationGasAmount}`);
console.log(`My car actual gas amount is: ${myCar.gasAmount}`);
theStation.refill(myCar);
