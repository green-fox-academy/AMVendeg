'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!


// split - reverse - join

let toBeReversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reverse(toBeReversed:string) {

    let splitText = toBeReversed.split("");
    let reverseArray = splitText.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}

reverse(toBeReversed);
console.log(reverse(toBeReversed));
