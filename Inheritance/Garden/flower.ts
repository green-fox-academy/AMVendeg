import { Plants } from './plants';

class Flower extends Plants {

    constructor(color: string = '') {
        super(color);
    }

    needWater() {
        if (this.waterAmunt < 5) {
            console.log(`The flower neeeds more water`);
        } else {
            console.log(`The flower doesn't need any water now.`);
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


