// Animal shelter
// It must have a budget, an animals list, an adopters name list
// The shelter starts with 50€ without any Animal and adopter
// It must have a method named rescue this method takes an Animal as parameter
// and add the animal to the shelter's list and return the size of the list
// It must have a method named heal this method heals the first not healthy Animal
// if it is possible by budget, returns the amount of healed animals(0 or 1)
// It must have a method named addAdopter this method takes a name as a parameter
// and saves it as a potential new owner
// It must have a method named findNewOwner
// this method pairs a random name with a random adoptable Animal if it is possible
// and removes both of them from the lists
// It must have a method named earnDonation this method takes an amount as parameter
// and increases the shelter's budget by the parameter's value and returns the current budget
// It must have a method named toString that represents the shelter
// and print all the informations about the shelter and the animals in the following format:

// Budget: <budget>€, 
// There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
// <name> is not healthy (healing would cost: <heal cost> €) and not adoptable
// <name> is healthy and adoptable

import { Animal } from './animal';

class AnimalShelter {
    budget: number = 0;
    animals: Animal [];
    adoptersNameList: string [];

    constructor () {
      this.budget = 50;
      this.animals = [];
      this.adoptersNameList = [];
    }

    // // It must have a method named rescue this method takes an Animal as parameter
    // and add the animal to the shelter's list and return the size of the list
    rescue(animal: Animal): number {
      this.animals.push(animal);
      return this.animals.length; 
    }

    // It must have a method named heal this method heals the first not healthy Animal
    // if it is possible by budget, returns the amount of healed animals(0 or 1)
    heal(): number {
      const firstIllAnimal = this.animals.find((animal: Animal) => !animal.isHealthy);
      if (!firstIllAnimal) {
        return 0;
      }
      if (firstIllAnimal.healCost && this.budget >= firstIllAnimal.healCost) {
        firstIllAnimal.heal();
        return 1;
      } 
      return 0;
    }

    // It must have a method named addAdopter this method takes a name as a parameter
    // and saves it as a potential new owner
    addAdopter(name: string): void {
      this.adoptersNameList.push(name);
    }

    hasAdoptable(): boolean {
      return this.animals.some((animal: Animal) => animal.isAdoptable());
    }
    

    // It must have a method named findNewOwner
    // this method pairs a random name with a random adoptable Animal if it is possible
    // and removes both of them from the lists
    findNewOwner(): void {
      if (!this.animals.length || !this.adoptersNameList.length || !this.hasAdoptable()) {
        return;
      }
      const randomAnimalIndex: number = Math.floor(Math.random() * (this.animals.length));
      const randomAdopterIndex: number = Math.floor(Math.random() * (this.adoptersNameList.length));
      this.animals.splice(randomAnimalIndex, 1);
      this.adoptersNameList.splice(randomAdopterIndex, 1);
    }

    // It must have a method named earnDonation this method takes an amount as parameter
    // and increases the shelter's budget by the parameter's value and returns the current budget
    earnDonation(amount: number): number {
      this.budget += amount;
      return this.budget;
    }

    // It must have a method named toString that represents the shelter
    // and print all the informations about the shelter and the animals in the following format:
    // Budget: <budget>€, 
    // There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
    // <name> is not healthy (healing would cost: <heal cost> €) and not adoptable
    // <name> is healthy and adoptable
    toString(): string {
      let animalText = '';
      /* for (let i: number = 0; i < this.animals.length; i++) {
         animalText += this.animals[i].toString() + '\n';
       // console.log(this.animals[i].toString());
      } */
      this.animals.forEach((animal: Animal) => animalText += animal.toString() + '\n');
      return `Budget: ${this.budget}€ There are ${this.animals.length} animal(s) \nand ${this.adoptersNameList.length} potentioal adopter(s) \n${animalText}`;
    } 
}

export { AnimalShelter };