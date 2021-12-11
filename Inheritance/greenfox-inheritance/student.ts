/* 
Create a Student class that has the same fields and methods as the Person class, and has the following additional

fields:
previousOrganization: the name of the student’s previous company / school
skippedDays: the number of days skipped from the course
methods:
getGoal(): prints 'My goal is: Be a junior software developer.'
introduce(): prints 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
skipDays(numberOfDays): increases skippedDays by numberOfDays

The Student class has the following constructors:
Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0
*/

import { Person } from './person';


class Student extends Person {
  
  public previousOrganization: string;
  public skippedDays: number;

  // csak 4 paramétert kell megadnom, ezek mellett mint constructor jön az organization és a skippedDays
  constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {

    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
    
  }

  public getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  public introduce(): void {
    console.log(`'Hi, I'm ${this.name}, and ${this.age} year old gender from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }

  // itt a skipDays-nek csak 1 paramétere van, de ez nem property, hanem csak paraméter amit példányosításkor én adok meg kívülről a greenfox file-ban
  public skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

export { Student };
