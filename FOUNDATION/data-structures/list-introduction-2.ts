/* 
Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains "Durian" or not
Remove "Durian" from List B
Add "Kiwifruit" to List A after the 4th element
Compare the size of List A and List B
Get the index of "Avocado" from List A
Get the index of "Durian" from List B
Add "Passion Fruit" and "Pomelo" to List B in a single statement
Print out the 3rd element from List A  
*/ 

'use strict';
// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
let listA: string [] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];


// Create a new list ('List B') with the values of List A
let listB: string [] = listA;


// Print out whether List A contains "Durian" or not
console.log(listA);


// Remove "Durian" from List B
listB.splice(3,1);
console.log(listB);


// Add "Kiwifruit" to List A after the 4th element
listA.splice(2, 0, "Kiwifruit");
console.log(listA);


// Compare the size of List A and List B
console.log("size of listA: " + listA.length, "size of listB: " + listB.length);


// Get the index of "Avocado" from List A
console.log(listA.indexOf("Avocado"));


// Get the index of "Durian" from List B
console.log(listB.indexOf("Durian"));


// Add "Passion Fruit" and "Pomelo" to List B in a single statement
listB.push("Passion Fruit", "Pomelo");
console.log(listB);


// Print out the 3rd element from List A  
console.log(listA[3]);

