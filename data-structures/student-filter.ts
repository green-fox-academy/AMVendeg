'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

let candiesList: string[] = [];

function moreCandiesThanFour(students: any[]): string [] {
  for (let i: number = 0; i < students.length; i++) {
    if (students[i].candies > 4) {
      candiesList.push(students[i].name);
    }
  }
  return candiesList;
}


let avCandies: number = 0;

function averageCandies(students: any[]): number {
  for (let i: number = 0; i < students.length; i++) {
    avCandies += students[i].candies / students.length;
  }
  return avCandies;
}

console.log(moreCandiesThanFour(students));
console.log(averageCandies(students));

