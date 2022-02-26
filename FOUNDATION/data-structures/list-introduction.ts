'use strict';

// create empty list which contain names (strings)
let names: string [] = [];


// print out the number of the elements of the list
let starWarsNames: string [] = ["Lea", "Skywalker", "Han Solo", "Darth Wader", "Jabba"];            // prints 5 

console.log(starWarsNames.length);


// add William to the list
starWarsNames.push("William");
console.log(starWarsNames);

// print out wether the list empty or not
// console.log(starWarsNames);

// add John to the list
starWarsNames.push("John");

// add Amanda to the list
starWarsNames.push("Amanda");

// peint out the number of the elements - should print 8 now
// console.log(starWarsNames.length);

// print out 3rd element
//console.log(starWarsNames[2]);
// kiírom a 4-iket is, mert darth wadert jobban kedvelem :) 
// console.log(starWarsNames[3]);


// Iterate through the list and print out each name
starWarsNames.forEach(function(i) {
    console.log(i);
});


// Iterate through the list and print
for (let i: number = 0; i < starWarsNames.length; i++) {

    console.log(i + 1 + "." + starWarsNames[i]);

}

// Remove the 2nd element
starWarsNames.splice(1,1);
console.log(starWarsNames);


// Iterate through the list in a reversed order and print out each name
for (let i: number = starWarsNames.length-1; i >= 0; i--) {

    console.log(starWarsNames[i]);
}


// Remove all elements -- miért?! :D 
let removeAllNames: string [] = [];
starWarsNames = removeAllNames;
console.log(starWarsNames);

// remove all elements another way
starWarsNames = [];
console.log(starWarsNames);







