import { F16 } from './f16-aircraft';
import { F35 } from './f35-aircraft';
// import { Aircraft } from './aircraft';

let myAircraft = new F35('F35'); 
myAircraft.refillAmmo(300);
myAircraft.getAmmunition();

myAircraft.getStatus();

let my16aircraft = new F16('F16');
my16aircraft.refillAmmo(22);


