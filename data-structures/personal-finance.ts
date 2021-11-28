/*
We are going to represent our expenses in a list containing integers.

Create a list with the following items:
500, 1000, 1250, 175, 800 and 120
Create an application which prints out the answers to the following questions:
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? (print this as a float value)
The full output of your main method should be the following:

3845
1250
120
640.8333
*/


let costList: number[] = [500, 1000, 1250, 175, 800, 120];

// how much did we spend?
    let allCost: number = costList.reduce((a, b) => a + b);
    console.log(allCost);
    // console.log("How much did we spent? \n We spent: " + allCost + "\n");


// Which was our greatest expense? 
    function findMax(array: number[]) {
        return Math.max.apply(null, array);
    }

    let maxCost = findMax(costList);
    console.log(maxCost);
    // console.log("Which was our greatest expense? \n Our greatest expense was: " + maxCost + "\n");


// Which was our cheapest spending?
    function findMin(array: number[]) {
        return Math.min.apply(null, array);
    }

    let minCost = findMin(costList);
    console.log(minCost);
    // console.log("Which was our cheapest expense? \n Our cheapest expense was: " + minCost + "\n");

// What was the average amount of our spendings? (print this as a float value)
    let summingCosts: number = costList.reduce((a, b) => a + b);
    let avgCost: number = summingCosts / costList.length;

    console.log(avgCost);
    // console.log("What was the average amount of our spendings? \n Our averagy of spending was: " + avgCost + "\n");

