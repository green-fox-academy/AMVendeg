// Create an application which prints out the answers to the following questions:

// Which products cost less than 201? (just the name)
let itemList: {[key: string]: number} = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

let lessThanItems: string = '';

for (let i: number = 0; i < Object.keys(itemList).length; i++) {
    
    if (Object.values(itemList)[i] < 201) {
        
        lessThanItems = Object.keys(itemList)[i];
        console.log(lessThanItems);
    } 
} 


// Which products cost more than 150? (name + price)

let moreThanItems: string = '';
let moreThanPrices: number = 0;

for (let i: number = 0; i < Object.keys(itemList).length; i++) {
    
    if (Object.values(itemList)[i] < 150) {
        
        moreThanItems = Object.keys(itemList)[i];
        moreThanPrices = Object.values(itemList)[i];
        console.log(moreThanItems + ': ' + moreThanPrices);
    } 
} 
