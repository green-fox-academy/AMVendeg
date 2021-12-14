/*
Create a Pirate class. You can add other fields and methods, yet, you must have these methods:

drinkSomeRum() - intoxicates the Pirate by one
howsItGoingMate() - when called, the Pirate replies:
if drinkSomeRun() was called less than 4 times:
"Pour me anudder!"
else:
"Arghh, I'ma Pirate. How d'ya d'ink its goin?". Then the pirate passes out and sleeps it off (gets rid of the intoxication).
If you manage to get this far, then you can try to do the following.

brawl(pirate: Pirate) - where pirate fights another pirate (if both of them are alive):
there is 1/3 chance that this dies, the other dies or they both pass out.
die() - this kills off the pirate. When a pirate is dead, every method simply results in: he's dead.
And... if you get that far...

Add a parrot.
*/

class Pirate {
  public toxicateLevel: number;

  constructor (toxicateLevel: number = 0) {
    this.toxicateLevel = toxicateLevel;
  }

  public getToxicLevel() {
    console.log(`Me toxic level: ${this.toxicateLevel}`);

    if (this.toxicateLevel === 0) {
      console.log(`Am I sober? Can't be possible!`);
    }
  }

  public drinkSomeRum() {
    this.toxicateLevel++;
  }

  public isDrunk(): boolean {
    // without "else {}" can work 
    if (this.toxicateLevel >= 4) {
      return true;
    } 
      return false;
  }

  public isDrunk2(): boolean {
    // if else quickly version - ternary conditional operator
    return this.toxicateLevel >= 4 ? true : false;
  }

  public howItsGoingMate() {
    if (this.toxicateLevel >= 4) {
      console.log('Pour me anudder!');
    } else {
      console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
    }
  }

  public getSleep() {
   this.toxicateLevel = 0;
  }
}
export { Pirate };

let DavyJones = new Pirate();
DavyJones.drinkSomeRum();
DavyJones.drinkSomeRum();
DavyJones.howItsGoingMate();

DavyJones.drinkSomeRum();
DavyJones.drinkSomeRum();
DavyJones.howItsGoingMate();

DavyJones.getSleep();
DavyJones.getToxicLevel();

