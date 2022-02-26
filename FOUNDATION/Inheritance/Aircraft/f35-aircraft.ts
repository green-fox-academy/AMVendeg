import { Aircraft } from './aircraft';
 
export class F35 extends Aircraft {

  constructor (type: string) {
    super();
      this.typeOfAircraft = type;
      this.ammunition = 0;
      this.maxAmmo = 12;
      this.baseDamage = 50;
    }
}