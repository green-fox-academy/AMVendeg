// Create a class that represents an aircraft-carrier
// The carrier should be able to store aircrafts
// Each carrier should have a store of ammo represented by a number
// The initial ammo should be given as a constructor parameter
// The carrier also has a health point which is also given as a constructor parameter

import { Aircraft } from './aircraft';

class Carrier extends Aircraft {
    aircraftStore: Aircraft [] = [];
    storeOfAmmo: number;
    healthPoint: number;

    constructor(storeOfAmmo:number, healthPoint: number) {
        super();
        this.aircraftStore = [];
        this.storeOfAmmo = storeOfAmmo;
        this.healthPoint = healthPoint;
    }

// It should take a new aircraft and add it to its storage
add(aircraft: Aircraft): void {
    this.aircraftStore.push(aircraft);
}


fill(ammo: number): void {

    //subtract the taken ammo from the ammo storage
    // It should throw an exception if there is no ammo when this method is called

    try {
    this.storeOfAmmo - ammo;
       
    } catch (error) {
        console.log('There is not enough ammo to fill');
    }

    // It should fill all the aircrafts with ammo 
    for (let aircraft of this.aircraftStore) {
        aircraft.refillAmmo(ammo);     
    }

    // If there is not enough ammo it should start to fill the aircrafts that are priority first
    for (let aircraft of this.aircraftStore) {
        if (ammo < this.getAmmunition() && aircraft.isPriority()) {
            aircraft.refillAmmo(ammo);
        }
    }
}

}

export { Carrier };
