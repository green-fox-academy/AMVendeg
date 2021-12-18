import { Plants } from './plants';

class Tree extends Plants {

    constructor (color: string = '') {
        super(color);
    }

    needWater() {
        if (this.waterAmunt < 10) {
            console.log(`The ${this.color} Tree need water`);
        } else {
            console.log(`The ${this.color} Tree doesn't need water`);
        }
    }

    getWater(waterAmount:number): void {
        let waterAbsorb = waterAmount * 0.4;
        if (this.waterAmunt < 10) {
            this.waterAmunt += waterAbsorb;
        }
    }

}
export { Tree };

