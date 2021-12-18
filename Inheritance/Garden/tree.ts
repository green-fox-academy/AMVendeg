import { Plants } from './plants';

class Tree extends Plants {

    constructor(color: string = '') {
        super(color);
    }
}
export { Tree };

let purpleTree = new Tree;
let orangeTree = new Tree;
purpleTree.color = 'purple';
orangeTree.color = 'orange';