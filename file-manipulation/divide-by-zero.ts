// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0


function divideTen(dividedBy: number) {

    if (dividedBy === 0) {

        throw new Error ('Végzetes hiba nullával osztani');

    } else return 10 / dividedBy;

}

console.log(divideTen(3));
console.log(divideTen(0));
