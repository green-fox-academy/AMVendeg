// create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition

class Aircraft {
   public typeOfAircraft: string;
   public ammunition: number;
   public maxAmmo: number;
   public starterAmmo: number;
   public baseDamage: number;

   constructor() {
       this.ammunition = 0;
       this.typeOfAircraft = '';
       this.maxAmmo = 0;
       this.starterAmmo = 0;
       this.baseDamage = 0;
   }
  
}

export { Aircraft };