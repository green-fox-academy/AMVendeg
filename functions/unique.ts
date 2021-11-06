//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

let allNumbers: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
let a = allNumbers;

function findUniqueItems(a:number[] = allNumbers) {

    for(let i = 0; i < a.length; i++) {
        
        for(let j = i + 1; j < a.length; j++) {

            if (a[i] === a[j]) {
                a.splice(j--, 1);
            }
        }
        
    }
}

// original AllNumbers
console.log(allNumbers);

// uniqued allNumbers
findUniqueItems(allNumbers);
console.log(allNumbers);

