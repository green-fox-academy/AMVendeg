import { Plants } from './plants';

class Flower extends Plants {

    constructor(color: string = '') {
        super(color);
    }

    needWater() {
        if (this.waterAmunt < 5) {
            console.log(`The ${this.color} flower need water`);
        } else {
            console.log(`The ${this.color} Tree doesn't need water`);
        }
    }

    getWater(waterAmount:number): void {
        let waterAbsorb = waterAmount * 0.75;
        if (this.waterAmunt < 5) {
            this.waterAmunt += waterAbsorb;
        }
    }
}

export { Flower };


