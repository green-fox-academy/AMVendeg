import { Plant } from './plant';

class Flower extends Plant {

    constructor(color: string = '') {
        super(color, 75, 5);
    }
}

export { Flower };


