import { Plants } from './plants';

class Flower extends Plants {

    constructor(color: string = '') {
        super(color);
    }
}
export { Flower };

let blueFlower = new Flower;
let yellowFlower = new Flower;
blueFlower.color = 'blue';
yellowFlower.color = 'yellow';

console.log(blueFlower);
