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
}

export { Carrier };