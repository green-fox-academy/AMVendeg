// create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition
// All aircrafts should be created with an empty ammo storage

// It should use all the ammo (set it to 0) and it should return the damage it causes
// damage is calculated by multiplying the base damage by the ammunition

// It should take a number as parameter that represents the ammunition coming from a station
// Increase the ammo of the aircraft by the right amount
// It can't have more ammo than the parameter value or the max ammo of the aircraft
// It should return the remaining (unused) ammo
// Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288 

// getType(): It should return the type of the aircraft as a string
// getStatus(): It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
// It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16


export abstract class Aircraft {
  public typeOfAircraft: string;
  public ammunition: number;
  public maxAmmo: number;
  public zeroAmmo: number;
  public baseDamage: number;

  constructor() {
    this.ammunition = 0;
    this.typeOfAircraft = '';
    this.maxAmmo = 0;
    this.zeroAmmo = 0;
    this.baseDamage = 0;
   }

  public fight(): number {
    this.ammunition = this.zeroAmmo;
    return this.baseDamage * this.ammunition;
  }

  ammoNeed(): number {
    return this.maxAmmo - this.ammunition;
  }

  refillAmmo(incomingAmmo: number): void {
    this.ammunition += this.ammoNeed();
    let remainingAmmo = incomingAmmo - this.ammunition;
    console.log(`Remaining ammo is: ${remainingAmmo}`);
  }

  getAmmunition(): number {
    return this.ammunition;
  }

  getType(): string {
    return this.typeOfAircraft;
  }

  getAllDamage(): number {
    return this.baseDamage * this.ammunition;
  }

  getStatus(): string {
    return `Type ${this.typeOfAircraft}, Ammo: ${this.getAmmunition()}, Base Damage: ${this.baseDamage}, All Damage: ${this.getAllDamage()}`;
   }

  isPriority(): boolean {
    return this.ammunition === 0 && this.typeOfAircraft === 'F35';
  }
}