// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test


// első megoldás: nem volt kikötve hogy a többi szám nem változhat, illetve hogyan lesz belőle 4, ezért igy lett:
let numbers = [1, 2, 3, 8, 5, 6].map(function(e) {
    return e / 2;
});

// print the 4th element as test
console.log(numbers[3]);

