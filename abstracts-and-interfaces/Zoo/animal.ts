// We are going to represent a Zoo. The animals are cuter than humans, 
//so let's focus on them right now.
// So we need an abstract Animal class
// it has name, age field
// it has getName() and breed() methods

abstract class Animal {
  name: string;
  age: number;
  color: string;
  numberOfLegs: number;
  isAlive: boolean;

  constructor(name: string) {
    this.name = name;
    this.age = 0;
    this.color = '';
    this.numberOfLegs = 0;
    this.isAlive = true;
  }

  getName(): string {
    return this.name;
  }

  // fajta
  breed(): void {
  }

  giveThemLegs() {
    this.numberOfLegs += 1;
  }

  info(): string {
    return `
    The animal name: ${this.name}, 
    age: ${this.age}, 
    color: ${this.color}, 
    legs: ${this.numberOfLegs}
    and is alive: ${this.isAlive}`;
  }
}

export { Animal };