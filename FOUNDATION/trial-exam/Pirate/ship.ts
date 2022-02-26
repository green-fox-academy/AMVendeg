// It should have a list of pirates.
// You must be able to add new pirates to the ship. It must have only one captain!
// methods:
// getCrewSize() returns the number of pirates on the ship
// getPoorPirates() which returns a list of names containing the pirates that
// have a wooden leg and have less than 15 golds
// getGolds() which returns the sum of gold owned by the pirates of that particular ship

import { Pirate } from "./pirate";
class Ship extends Pirate {
  shipName: string = '';
  listOfPirates: Pirate [] = [];

// addPirate() void, i don't use the return value
  addPirate(newPirate: Pirate): void {
      if (!newPirate.isCaptain) {
        this.listOfPirates.push(newPirate);
      } else {
        if (this.listOfPirates.some((pirate: Pirate) => pirate.isCaptain)) {
        console.log('The ship already has a captain! You can not add more.');
        } else {
          this.listOfPirates.push(newPirate);
        }
      }
  }

  // Crew Size pro version, string type
  // getCrewSize(): string {
  //   return `The crew size is: ${this.listOfPirates.length}.`;
  // }

  getCrewSize(): number {
    return this.listOfPirates.length;
  }

  getPoorPirates(): string [] {
    let poorPiratesNameList: string [] = [];
    for (let i: number = 0; i < this.listOfPirates.length; i++) {
      if (this.listOfPirates[i].hasWoodenLeg === true && this.goldAmount < 15) {
        poorPiratesNameList.push(this.listOfPirates[i].pirateName);
      }
    }
    return poorPiratesNameList;
  }


  getGolds(): number {
    let sumOfGold: number = 0;
    for (let i: number = 0; i < this.listOfPirates.length; i++) {
      sumOfGold += this.listOfPirates[i].goldAmount;
    }
    return sumOfGold;
  }

  //which calls the pirates' party() method.
  lastDayOnTheShip(): void {
    for (let i: number = 0; i < this.listOfPirates.length; i++) {
      this.listOfPirates[i].party();
    }
  }

  // calls the pirates' work() method and the ship's lastDayOnTheShip() method
  prepareForBattle(): void {
    for (let i: number = 0; i <= 5; i++) {
      this.listOfPirates[i].work();
    }
    this.lastDayOnTheShip();
  }
}

export { Ship };

