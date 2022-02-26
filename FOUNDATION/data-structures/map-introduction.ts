// Create an empty map where the keys are integers and the values are characters
// Print out whether the map is empty or not
// Add the following key-value pairs to the map
/*
Add the following key-value pairs to the map

Key	Value
97	a
98	b
99	c
65	A
66	B
67	C

Print all the keys
Print all the values
Add value D with the key 68
Print how many key-value pairs are in the map
Print the value that is associated with key 99
Remove the key-value pair where with key 97
Print whether there is an associated value with key 100 or not
Remove all the key-value pairs
*/


let mapExercise: { [key: number]: string } = {};

console.log(mapExercise);

mapExercise = {
    97: "a",
    98: "b",
    99: "c",
    65: "A",
    66: "B",
    67: "C",
}

console.log(Object.keys(mapExercise));
console.log(Object.values(mapExercise));

mapExercise[68] = "D";

console.log(Object.values(mapExercise).length);

console.log(mapExercise[99]);

delete mapExercise[97];
console.log(mapExercise);

if (mapExercise[100] === "") {

    console.log("There is key 100");

} else console.log("There is no key 100");


for (let i = 0; i < Object.keys.length; i++) {

    delete mapExercise[i];
    
}
console.log(mapExercise);

