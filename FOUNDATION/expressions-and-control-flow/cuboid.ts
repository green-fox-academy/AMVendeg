// CUBOID
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cubA: number = 13.3;
let cubB: number = 22.6;
let cubC: number = 9.1;
const cuboidSurface: number = 2 * (cubA*cubB + cubA*cubC + cubB*cubC);
const cuboidVolume: number = cubA * cubB * cubC;

console.log(`The surface of the cuboid is: ${cuboidSurface}`);
console.log(`The volume of the cuboid is: ${cuboidVolume}`);

// refactored to function
function cuboidSurfaceAndVolumeCounter(cubA: number, cubB: number, cubC: number) {
  const cuboidSurface: number = 2 * (cubA*cubB + cubA*cubC + cubB*cubC);
  const cuboidVolume: number = cubA * cubB * cubC;
  return `The surface of the cuboid is: ${cuboidSurface}\nThe volume of the cuboid is: ${cuboidVolume}`;
}
console.log(cuboidSurfaceAndVolumeCounter(13.5, 22.6, 9.2));