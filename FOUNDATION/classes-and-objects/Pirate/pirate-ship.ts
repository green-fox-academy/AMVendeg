/* 
The place for the Pirates.Create a Ship class.
The Ship stores Pirateinstances in a list as the crew and has one captain who is also a Pirate.
When a ship is created it doesn't have a crew or a captain.
The ship can be filled with pirates and a captain via fillShip() method.
fills the ship with a captain and a random (maximum 113) number of pirates
Ships should be represented in a nice way on command line including information about
rum consumed by the captain and its state (dead or alive)
number of alive pirates in the crew
Ships should have a method to battle other ships: ship.battle(otherShip: Ship)
should return true if the actual ship (this) wins
the ship should win if its calculated score is higher
calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain
The loser crew has a random number of losses (deaths).
The winning captain and crew has a party: everyone drinks a random number of rum :)
*/
import { Pirate } from './pirate';

class Ship extends Pirate {
  shipName: string;
  listOfPirates: string [] = [];

  constructor (shipName: string) {
    super();
    this.shipName = shipName;
    this.listOfPirates = [];
  }

  addPirate(pirate: Pirate) {
    this.listOfPirates.push(pirate.name);
  }

  shipInfo():void {
    // this give info about the ship: list of pirates and the name of the ship (and who is the captain?)
    console.log(`The ship name is ${this.shipName}, crew size: ${this.listOfPirates.length}`);
  }
}

export { Ship };