// -  Create an array variable named `animals`
//    with the following content:
//    `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
//      "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// -  Add all elements an `"a"` at the end


let animals = [
    "koal", "pand", "zebr", "anacond", 
    "bo", "chinchill", "cobr", "gorill", 
    "hyen", "hydr", "iguan", "impal", 
    "pum", "tarantul", "pirahn"
];

for (let i = 0; i < animals.length; i++) {                  // for loop végig meg a tömb elemein egyesével és minden elem végére hozzátesz egy 'a'-t
    animals[i] = animals[i] + "a";
}

console.log(animals);

