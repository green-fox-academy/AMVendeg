import { Aircraft } from './aircraft';
 
export class F16 extends Aircraft {

  constructor (type: string) {
    super();
    this.typeOfAircraft = 'F16';
    this.ammunition = 0;
    this.maxAmmo = 10;
    this.baseDamage = 30;
  }
}