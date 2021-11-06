'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let MissingQuote = "always takes longer than";

let quotePartOne = quote.substr(0,21);
let quotePartTwo = quote.slice(20);

quote = quotePartOne.concat(MissingQuote, quotePartTwo);

//console.log(quotePartOne);
// console.log(quotePartTwo);

console.log(quote);