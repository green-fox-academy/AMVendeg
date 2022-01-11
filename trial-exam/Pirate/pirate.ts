// Write a program which can store pirates in a ship.
// A pirate has a name (name), an amount of gold (goldAmount) 
// and health points (healthPoints), the default value of which is 10.
// Pirates can be only created by defining their names
// Pirates start with 0 amount of gold
// A pirate might be a captain and may have a wooden leg (hasWoodenLeg)

// You must create the following methods:
// if a pirate is a captain:
//work() which increases the amount of gold possessed by that pirate by 10 and decrease the HP by 5.
// party() which increases the HP by 10.
// if the pirate is not a captain:
// work() which increases the amount of gold by 1 and decreases the HP by 1.
// party() which increases the HP by 1.
// toString() method:
// if the pirate has a wooden leg, then the string that is returned by the function must look like this:
// Hello, I'm Jack. I have a wooden leg and 20 golds.
// f not:
// Hello, I'm Jack. I still have my real legs and 20 golds.

class Pirate {
  public pirateName: string = '';
  public goldAmount: number;
  public healthPoints: number;
  public isCaptain: boolean;
  public hasWoodenLeg?: boolean;

  constructor (name: string, isCaptain: boolean = false, woodenLeg = false) {
    this.pirateName = name;
    this.goldAmount = 0;
    this.healthPoints = 10;
    this.isCaptain = isCaptain;
    this.hasWoodenLeg = woodenLeg;
  }

  public getWoodenLeg(): string {
    if (this.hasWoodenLeg === true) {
    return `wooden leg`;
    } else {
      return `I still have my real legs`; 
    }
  } 

  public work(): void {
    if (this.isCaptain === true) {
      this.goldAmount += 10;
      this.healthPoints -= 5;
    } else {
      this.goldAmount++;
      this.healthPoints--;
    }
  }

  public party(): number {
    if (this.isCaptain === true) {
    return this.healthPoints -= 10;
    } else {
      return this.healthPoints--;
    }
  }

  public toString(): string {
    if (this.hasWoodenLeg === true) {
      return `Hello, I'm ${this.pirateName}. I have a ${this.getWoodenLeg()} and ${this.goldAmount} golds.`;
    } else {
      return `Hello, I'm ${this.pirateName}. ${this.getWoodenLeg()} and ${this.goldAmount} golds.`;
    }
  }

}
export { Pirate };
