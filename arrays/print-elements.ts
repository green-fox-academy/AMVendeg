

// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method

// számokkal próbáltam a loop-t ezért nem tette tömbbe, végül utánanéztem és megvilágosodás :)


let numbers: number[] = [4, 5, 6, 7, 23, 89, 628, 77, 35, 99];
// első megoldás:
// console.log(numbers);

// második megoldás: egyszer irja csak ki az eredményt tömbben, függetlenül mennyi eleme van a tömbnek
for (let i = numbers.length - 1; i < numbers.length; i++) {
   console.log(numbers[i]);
}

// harmadik megoldás: kiírja az elemeket, de nem tömbbként, hanem számként
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
 }









