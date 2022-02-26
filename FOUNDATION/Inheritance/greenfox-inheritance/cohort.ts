/*
Create a Cohort class that has the following

fields:
name: the name of the cohort
students: a list of Students
mentors: a list of Mentors

methods:
addStudent(Student): adds the given Student to students list
addMentor(Mentor): adds the given Mentor to mentors list
info(): prints 'The name cohort has size of students students and size of mentors mentors.'
The Cohort class has the following constructors:

Cohort(name): beside the given parameter it sets students and mentors as empty lists
*/

import { Person } from "./person";
import { Student } from "./student";
import { Mentor } from "../mentor";

class Cohort extends Person {

  cohortName: string;
  listOfStudents: string [];
  listOfMentors: string [];

  constructor (cohortName: string = '') {
    super();
    this.cohortName = cohortName;
    this.listOfStudents = [];
    this.listOfMentors = [];
  }

  addStudent(student: Student) {
    // adds the given Student to students list
    this.listOfStudents.push(student.name);
  }

  addMentor(mentor: Mentor) {
    // adds the given Mentor to mentors list
    this.listOfMentors.push(mentor.name);
  }

  info(): void {
    // prints 'The name cohort has size of students students and size of mentors mentors.'
    console.log(`The ${this.cohortName} has ${this.listOfStudents.length} students and ${this.listOfMentors.length} mentors.`)
  }

}

export { Cohort };
