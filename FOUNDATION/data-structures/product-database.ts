// We are going to represent our products in a map where the keys 
// are strings representing the product's name and the values are 
//numbers representing the product's price.

// Create a map with the following key-value pairs:

let productList: {[key: string]: number} = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

// how much is the fish? 
console.log(productList['Fish']);

// What is the most expensive product?
let mostExpensiveProduct: string = Object.keys(productList)[0];

for (let i: number = 0; i <= Object.keys(productList).length; i++) {

    if (productList[mostExpensiveProduct] < Object.values(productList)[i]) {
        mostExpensiveProduct = Object.keys(productList)[i];
    }
}
console.log(mostExpensiveProduct);


// What is the average price?
let sumPrices: number = 0;
for (let i: number = 0; i < Object.values(productList).length; i++) {
    sumPrices += Object.values(productList)[i];
}

let averagePrice: number = sumPrices / Object.values(productList).length;
console.log(averagePrice);


// How many products' price is below 300?
let priceBelow300:number = 0;

for (let i: number = 0; i < Object.keys(productList).length; i++) {
    if (Object.values(productList)[i] < 300) {
        priceBelow300++;
    }
}
console.log(priceBelow300);


// Is there anything we can buy for exactly 125?
let priceFor: number = 125;

function buyFor125(productList: {[key: string]: number}, price: number) {
    for (let i: number = 0; i < Object.keys(productList).length; i++) {

        if (Object.values(productList)[i] === price) {
        return true;
        
        } 
    } 
    return false;
}
console.log(buyFor125(productList, priceFor));


// What is the cheapest product?
let cheapestProduct: string = Object.keys(productList)[0];

for (let i: number = 0; i <= Object.keys(productList).length; i++) {

    if (productList[cheapestProduct] > Object.values(productList)[i]) {
        cheapestProduct = Object.keys(productList)[i];
    }
}
console.log(cheapestProduct);