// Create an abstract Vehicle class
// it should have at least 3 fields

abstract class Vehicle {
    name: string;
    gasType: string;
    gasCapacity: number;

    constructor (name: string, gasType: string, gasCapacity: number) {
        this.name = name;
        this.gasType = gasType;
        this.gasCapacity = gasCapacity;
    }
}

export { Vehicle };