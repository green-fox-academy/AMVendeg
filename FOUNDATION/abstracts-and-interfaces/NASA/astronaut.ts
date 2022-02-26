// create astronaut give them properties and methods
// astronaut is an abstract class, 'cause there some my type of astronauts 
// ex.: deep space astronaut, space-station astronaut
// astronauts can be killed by space temprature which is -271 C.
// if astronauts temprature goes below 0, there is an icepoint, normal temprature 36 C.

export class Astronaut {
  name: string;
  nationality: string;
  specialization: string;
  isOnTheShip: boolean;
  completedMisson: number;
  isAlive: boolean;
  temperature: number;
  specializations: string [];

  constructor (name: string, nationality: string) {
    this.name = name;
    this.nationality = nationality;
    this.specialization = '';
    this.isOnTheShip = false;
    this.completedMisson = 10;
    this.isAlive = true;
    this.temperature = 36;
    this.specializations = [
      'astrophysicist', 
      'engineer', 
      'astrobiologist', 
      'alien scientist', 
      'space hurricane expert'];
  }
  
  addRandomSpecialization(): void {
    this.specialization = this.specializations[Math.floor(Math.random() * this.specializations.length)];
  }

  killedBySpace(): void {
    this.isAlive = false;
  }
}
