// Extend Helicopter class from Vehicle
// implement your Flyable interface

import { Vehicle } from './vehicle';
import { FlyableInterface } from './flyable';

class Helicopter extends Vehicle implements FlyableInterface {
    constructor() {
        super('Medicopter117','gasoline',900);
    }

    land(): void {
        console.log('I can land.');
    }

    fly(): void {
        console.log('I can fly.');
    }

}