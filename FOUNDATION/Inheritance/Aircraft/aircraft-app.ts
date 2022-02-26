import { F16 } from './f16-aircraft';
import { F35 } from './f35-aircraft';
import { Carrier } from './carrier';
// import { Aircraft } from './aircraft';

let myAircraft = new F35('F35'); 
myAircraft.refillAmmo(300);
myAircraft.getAmmunition();

myAircraft.getStatus();

let my16aircraft = new F16('F16');
console.log(my16aircraft.refillAmmo(60));



