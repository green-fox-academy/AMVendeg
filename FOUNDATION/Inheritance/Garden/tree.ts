import { Plant } from './plant';

class Tree extends Plant {

    constructor (color: string = '') {
        super(color, 40, 10);
    }
}
export { Tree };

