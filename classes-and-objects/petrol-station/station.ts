import { Car } from './car';

class Station {
  stationGasAmount: number = 5000;

  refill(car: Car) {
    this.stationGasAmount = this.stationGasAmount - car.capacity;
    car.gasAmount = car.gasAmount + car.capacity;

    console.log(`After refill station gas amount is: ${this.stationGasAmount} and car gas amount is: ${car.gasAmount}.`);
  }
}

export { Station };