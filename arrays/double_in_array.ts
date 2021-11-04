// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`


// második megoldás kiirja már többen

let drink = ['Gin', 'Whiskey', 'Wine', 'Beer'];

    let drinkDoubled = drink.map(function(e) {
        return e + e;
        
    })
    
console.log(drinkDoubled);
