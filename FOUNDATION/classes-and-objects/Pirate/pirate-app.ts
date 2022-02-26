import { Pirate } from './pirate';
import { Ship } from './pirate-ship';

let myFirstPirate = new Pirate('DavyJones');
let myShip = new Ship('Bolygó Hollandi');

// add my pirate to the ship
myShip.addPirate(myFirstPirate);
// he is the captain
myFirstPirate.nominateToCaptiain();

// ship info
myShip.shipInfo();

// Davy Jones dies :-( )
myFirstPirate.die();

// test function after died --> Pirate is dead.
myFirstPirate.drinkSomeRum();