import { Plants } from './plants';

class Tree extends Plants {

    constructor (color: string = '') {
        super(color);
    }

    needWater() {
        if (this.waterAmount < 10) {
            console.log(`The ${this.color} Tree needs water`);
            return true;
        } else {
            console.log(`The ${this.color} Tree doesn't need water`);
            return false;
        }
    }

    getWater(waterAmount:number): void {
        let waterAbsorb = waterAmount * 0.4;
        if (this.waterAmount < 10) {
            this.waterAmount += waterAbsorb;
        }
    }

}
export { Tree };

