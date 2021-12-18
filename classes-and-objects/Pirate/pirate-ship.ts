/* 
The place for the Pirates

Create a Ship class.
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

  public listOfPirates: Pirate [];
  public captain: string;
  sizeOfCrew: number;
  isAlive: boolean;

  constructor () {
    super();
    this.listOfPirates = [];
    this.captain = this.name;
    this.sizeOfCrew = 0;
    this.isAlive = true;
  }

  public fillShip(newPirate: Pirate): void {
      //if (this.listOfPirates.length <= this.sizeOfCrew) {
        this.listOfPirates.push(newPirate);
      //} 
    }

  public getShip(): Pirate [] {
    return this.listOfPirates;
  }

  // rum consumed by the captain and its state (dead or alive)
  public getCaptainState(): void {
    console.log(`Hi, I'm ${this.name}, the Captain of this ship.`);
    console.log(`Me toxic level: ${this.toxicateLevel}`);
  }
 
}

let DavyJonesCaptain = new Pirate();
let firstPirate = new Pirate();
let myShip = new Ship();
myShip.fillShip(DavyJonesCaptain);
myShip.fillShip(firstPirate);
myShip.getShip();