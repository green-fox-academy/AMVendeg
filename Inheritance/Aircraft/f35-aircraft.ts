import { Aircraft } from './aircraft';
 
class F35 extends Aircraft {

    constructor (type: string) {
        super();
        this.typeOfAircraft = 'F35';
        this.maxAmmo = 12;
        this.baseDamage = 50;
    }
}

export { F35 };