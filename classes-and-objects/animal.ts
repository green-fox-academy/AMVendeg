/* 
Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
When creating a new animal instance these values must be set to the default 50 value
Every animal can eat() which decreases its hunger by one
Every animal can drink() which decreases its thirst by one
Every animal can play() which increases both its hunger and thirst by one
*/

export class Animal {
  hungerValue: number;
  thirstValue: number;

  constructor (hungerValue: number = 50, thirstValue: number = 50) {
    this.hungerValue = hungerValue;
    this.thirstValue = thirstValue;
  }

  eat() {
    this.hungerValue--;
  }

  drink() {
    this.thirstValue--;
  }

  play() {
    this.hungerValue++;
  }
} 

// When creating a new animal instance these values must be set to the default 50 value
let myAnimal = new Animal();
myAnimal.eat();
myAnimal.drink();
myAnimal.play();

console.log(myAnimal);




