/*
Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

fields:
company: name of the company
hiredStudents: number of students hired

method:
introduce(): prints 'Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far.'
hire(): increases hiredStudents by 1
getGoal(): prints 'My goal is: Hire brilliant junior software developers.'

The Sponsor class has the following constructors:
Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0
*/

import { Person } from './person';

class Sponsor extends Person {

  public company: string;
  public hiredStudents: number;

  constructor(name: string ='Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  public hire(): void {
    this.hiredStudents++;
  }

  public getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}

export { Sponsor };
