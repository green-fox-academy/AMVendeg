'use strict';

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`


// megjegyzés: első elem igazából a "Boe", harmadik pedig nincs :) 


let names = ["Arthur", "Boe", "Chloe"];
[names[0], names[2]] = [names[2], names[0]];                    // ez az egy soros megoldás a nevek felcserélésére, tömmbbe kell tenni mindkét oldalt
console.log(names);



let namesOther = ["Melanie", "Joe", "Louise"];                  // ideiglenes változó létrehozás ami tárolja az a nevet, amit felülirok, majd beteszem a megfelelő helyre             
let tempName = namesOther[0];

namesOther[0] = namesOther[2];
namesOther[2] = tempName;

console.log(namesOther);