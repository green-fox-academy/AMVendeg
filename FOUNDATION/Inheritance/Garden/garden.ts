import { Plant } from './plant';
// import { Flower } from './flower';
// import { Tree } from './tree';

class Garden {
  // listOfPlants have flowers and trees also by default
  listOfPlants: Plant [] = []; 
  
    addPlant(plant: Plant): void {
      this.listOfPlants.push(plant);
    }

    watering(waterAmount: number): void {
      console.log(`Watering with ${waterAmount}`);
      
      // const thirstyPlants: Plant[] = this.plant.filter(p => p.isThirsty());
      // let eachPlantWaterAmount: number = waterAmount / thirstyPlants.length;
      // thirstyPlants.forEach(p => p.watering(eachPlantWaterAmount));
  
      let thirstyPlantCount: number = 0;
        for (let plant of this.listOfPlants) {
          if (plant.isThirsty()) {
            thirstyPlantCount++;
          }
        }
  
      let eachPlantWaterAmount: number = waterAmount / thirstyPlantCount;
        for (let plant of this.listOfPlants) {
          if (plant.isThirsty()) {
            plant.watering(eachPlantWaterAmount);
          }
        }
    }

    printStatus(): void {
      this.listOfPlants.forEach(p => p.showStatus());
        for (let plant of this.listOfPlants) {
          plant.showStatus();
        }
      console.log('\n');
    }
      
}

export { Garden };

