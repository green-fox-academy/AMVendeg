//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending


let numbers: number[] = [34, 12, 24, 9, 5];

function bubble(array:number[]):number[]{
    array = array.slice();                                                          // slice-al feldarabolom 
   
    for (let i = 0; i < array.length; i++) {                                        // ez a for ciklus végigmegy a tömbön

        for (let j = 0; j < array.length - 1; j++) {                                 // ez a for ciklus visszafelé lépked, 

            if (array[j] > array[j + 1]) {                                           // HA a tömb j eleme nagyon mint a j + 1, akkor

                [array[j], array[j + 1]] = [array[j + 1], array[j]];                // j, j+1 egy tömbben = j + 1, j-vel, vagyis felcseréli az elemeket
            }
        }
    }
    
    return array;                                                                   // visszatér a tömbbel
}

console.log(bubble(numbers));                                                       // kiirom consolra a function-t a numbers tömbre















//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]