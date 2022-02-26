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

  public name: string;
  public toxicateLevel: number;
  public isCaptain: boolean;
  public gender: string;
  public isAlive: boolean;
  
  constructor (name: string = '') {
    this.name = name;
    this.toxicateLevel = 0;
    this.isCaptain = false;
    this.gender = 'nonbinary';
    this.isAlive = true;
  }
  
  public die(): void {
    this.isAlive = false;
    // console.log(this.isAlive);
  }

  public dead(): void  {
    console.log(`The ${this.name} pirate is dead.`);
  }

  public nominateToCaptiain(): void {
    this.isCaptain = true;
    if (this.isAlive === true) {
      console.log(`The captain of the ship is ${this.name}.`);
    } else {
      this.dead();
    }
  }

  public getToxicLevel(): void {
    if (this.toxicateLevel === 0 && this.isAlive === true) {
      console.log(`Am I sober? Can't be possible!`);
    } else {
      console.log(`${this.isAlive ? `Me toxic level: ${this.toxicateLevel}` : `The ${this.name} pirate is dead.`}`);
    }
  }

  public drinkSomeRum(): void {
    if (this.isAlive === true) {
    this.toxicateLevel++;
    } else {
      this.dead();
    }
  }

  public isDrunk(): boolean {
    // without "else {}" also works 
    if (this.toxicateLevel >= 4 && this.isAlive === true) {
      return true;
    } else {
      this.dead();
      return false;
    }
  }

  public isDrunk2(): boolean {
    // if else quickly version - ternary conditional operator
    return this.toxicateLevel >= 4 ? true : false;
  }

  public howItsGoingMate(): void {
    if (this.toxicateLevel >= 4 && this.isAlive === true) {
      console.log('Pour me anudder!');
    } else {
      console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
    }

    if (this.isAlive === false) {
      this.dead();
    }
  }

  public getSleep(): void {
     if (this.isAlive === false) {
     this.dead();
    } else {
      this.toxicateLevel = 0;
    }
  }
}

export { Pirate };


