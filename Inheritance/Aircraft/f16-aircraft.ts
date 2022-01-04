import { Aircraft } from './aircraft';
 
class F16 extends Aircraft {

    constructor (type: string) {
        super();
        this.typeOfAircraft = 'F16';
        this.maxAmmo = 8;
        this.baseDamage = 30;
    }
}

export { F16 };
