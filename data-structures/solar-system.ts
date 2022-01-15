'use strict';
// "Saturn" is missing from the planetList
// Insert it into the correct position
// Create a method called "putSaturn()" which has a list parameter and returns the correct list
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

function putSaturn(planetList: string[]): string[] {
  planetList.splice(5, 0,'Saturn');
  return planetList;
}

console.log(putSaturn(planetList));
