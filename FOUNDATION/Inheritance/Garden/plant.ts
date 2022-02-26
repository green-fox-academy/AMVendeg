// Plant is an abstract class, because we did not make Plant just like this way
// We create anything else class into it, ex.: flower, tree, grass

abstract class Plant {
  color: string;
  waterLevel: number;
  absorptionLevel: number;
  thirstyLimit: number;

  constructor (color: string = '', absorptionLevel: number, thirstyLimit: number) {
    this.color = color;
    this.absorptionLevel = absorptionLevel;
    this.thirstyLimit = thirstyLimit;
    this.waterLevel = 0;
  }

  // '' : '' ----> if else shorter - ternary operator
  showStatus(): void {
    console.log(`The ${this.color} ${this.constructor.name} ${this.isThirsty() ? 'needs water' : 'do not need water'}`);
  }

  watering(waterAmount: number): void {
    this.waterLevel += this.absorptionLevel / 100 * waterAmount;
  }

  // compare return with true or fales just like if else
  isThirsty(): boolean {
    return this.waterLevel < this.thirstyLimit;
  }
}

export { Plant };


