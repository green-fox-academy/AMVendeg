// import { Plants } from './plants';
import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
    listOfPlants: Flower [] | Tree []; 

    constructor() {
        this.listOfPlants = [];
    }

    addPlantToGarden(plant: Flower | Tree): void {
        this.listOfPlants.push(plant);
    }

    getGarden() {
        console.log(this.listOfPlants);
    }
}

let myGarden = new Garden();
let blueFlower = new Flower();
let orangeTree = new Tree();
myGarden.addPlantToGarden(blueFlower);
myGarden.addPlantToGarden(orangeTree);