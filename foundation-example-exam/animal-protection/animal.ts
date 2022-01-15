// Animal
// It must have ownerName and stores it's health's state isHealthy (true or false) and a healCost.
// It must have a method named heal(), that sets the isHealthy field's status to true
// It must have a method named isAdoptable that returns a boolean value 
// whether it can be adopted or not - an animal can be adopted if it is healthy

// It must have a method named toString() that represents the Animal in the following format:
// <name> is not healthy (<heal cost>€), and not adoptable
// <name> is healthy, and adoptable
// The animal's name is the same as the class name by default, but it can be set trough constructor as well

abstract class Animal {
  ownerName: string | undefined;
  isHealthy: boolean;
  healCost: number | undefined;
  animalName: string;

  constructor (animalName: string) {
    this.ownerName = undefined;
    this.healCost = undefined;
    this.animalName = animalName;
    this.isHealthy = true;
  }

  // heal(), that sets the isHealthy field's status to true
  heal(): void {
    this.isHealthy = true;
  }

  feedWithSpoiledFood(): void {
    this.isHealthy = false;
  }

  isAdoptable(): boolean {
    if (this.isHealthy === true) {
      return true;
      } else {
        return false;
      }
  }

  toString(): void {
    if (this.isHealthy === false) {
      console.log(`${this.animalName} is not healthy (${this.healCost} € ) and not adoptable.`);
    } else {
      console.log(`${this.animalName} is healthy and not adoptable.`);
      }
  }
}

export { Animal };

