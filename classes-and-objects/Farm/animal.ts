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
    public hungerValue: number;
    public thirstValue: number;
  
    constructor (hungerValueParam: number = 50, thirstValueParam: number = 50) {
      this.hungerValue = hungerValueParam;
      this.thirstValue = thirstValueParam;
    }
  
    eat(): void {
      this.hungerValue--;
    }
  
    drink(): void {
      this.thirstValue--;
    }
  
    play(): void {
      this.hungerValue++;
      this.thirstValue++;
    }

    getHunger(): number {
      return this.hungerValue;
    }

    getThirst(): number {
      return this.thirstValue;
    }
  } 
  
  // When creating a new animal instance these values must be set to the default 50 value
  let myAnimal = new Animal();
  myAnimal.eat();
  myAnimal.drink();
  myAnimal.play();
  
  console.log(myAnimal);
  
  