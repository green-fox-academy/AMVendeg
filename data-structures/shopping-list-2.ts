// product list and  prices

let productsAndPrices: {[key: string]: number} = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
}

let bobShoppingList: {[key: string]: number} = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}

let aliceShoppingList: {[key: string]: number} = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10
}

// How much does Bob pay?
let sumOfBobList: number = 0;

for (let key in bobShoppingList) {

    if (key in productsAndPrices) {
    sumOfBobList += bobShoppingList[key] *  productsAndPrices[key];
    }
}
console.log(sumOfBobList);


// How much Alice pay?
let sumOfAliceList: number = 0;

for (let key in aliceShoppingList) {

    if (key in productsAndPrices) {
    sumOfAliceList += aliceShoppingList[key] *  productsAndPrices[key];
    }
}
console.log(sumOfAliceList);


// Who buys more Rice?
if (bobShoppingList['Rice'] < aliceShoppingList['Rice']) {
    console.log('Alice');
} else {
    console.log('Bob');
}

// Who buys more Potato?
if (bobShoppingList['Potato'] < aliceShoppingList['Potato']) {
    console.log('Alice');
} else {
    console.log('Bob');
}

// Who buys more Ham?
for (let key in productsAndPrices) {
    if (bobShoppingList[key] === productsAndPrices['Ham']) {
        console.log('No one');
    }
}
   

// Who buys more Apples?
if (bobShoppingList['Apple'] < aliceShoppingList['Apple']) {
    console.log('Bob');

} if (bobShoppingList['Apple'] > aliceShoppingList['Apple']) {
    console.log('Alice');

} else {
    console.log('No one');
}


// Who buys more of different products?

if (Object.keys(bobShoppingList).length < Object.keys(aliceShoppingList).length) {
    console.log('Alice');
} 

if (Object.keys(bobShoppingList).length > Object.keys(aliceShoppingList).length) {
    console.log('Bob');
} 


// Who buys more items? (more pieces)
// I am working on it