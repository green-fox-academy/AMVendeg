// import { Plants } from './plants';
import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
    listOfPlants: Flower [] | Tree []; 
    // numberOfPlants: number;
    
    constructor() {
      this.listOfPlants = [];
    }

    addPlants(plant: Flower | Tree ) {
      this.listOfPlants.push(plant);
      return this.listOfPlants;
    }

    getGarden(): void {
      for(let i: number = 0; i < this.listOfPlants.length; i++) {
        console.log(this.listOfPlants[i]);
      }
    }

    watering(waterAmount: number): void {
      console.log(`Watering with ${waterAmount}`);

      for (let i: number = 0; i < this.listOfPlants.length; i++) {
        if (this.listOfPlants[i].needWater()) {
          this.listOfPlants[i].getWater(waterAmount / this.listOfPlants.length);
        }
      }
    }
}

let myGarden = new Garden();
let flower = new Flower('blue');
let tree = new Tree('orange');

myGarden.addPlants(flower);
myGarden.addPlants(tree);

myGarden.getGarden();
myGarden.watering(40);

myGarden.getGarden();
