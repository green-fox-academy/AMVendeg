// console.log('hello-me');

'use strict';

// Modify this progeam to greet you instead of the World!
// let myName = "Jones";
// console.log('Hello ' + myName);

/* Modify this program to console.log Humpty Dumpty riddle correctly
console.log('Humpty Dumpty had a great fall.');
console.log('Humpty Dumpty sat on a wall,');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.'); 
*/

/* Greet 3 of your classmates with this progream in three separate lines like:
console.log('Hello, Patrik!');
console.log('Hello, Gábor!');
console.log('Hello, Bálint!');
*/

//PRINT DIFFERENT TYPES

// print string
console.log('Ez string, vagyis szöveg tipus.');

// print number
console.log(36);

// print boolean
console.log('true');

// print floating point number
console.log(66.9393);


// INTEGERS: positive, negative, zero
console.log(13);
console.log(-236);
console.log(0);
console.log(0.0) // Prints 0

// OPERATIONS
console.log(28674+72395); 
console.log(100-98);
console.log(877/23);
// console.log(60÷2);       // ez a mardék operátor, de nem fogadja el a typescript idk why
console.log(84*22);

// booleans
console.log(true);
console.log(false);

// AND && (option + 1)
console.log(!true);             // print false !, az ellenkezője lesz, negotion
console.log(!false);            // print true, !, ellenkezője lesz, negotion
console.log( true && true );    // igaz és igaz = igaz
console.log( true && false);    // false, mert van benne egy false
console.log( false && true );   // false, szintén
console.log( false && false);   // true, mert megegyeznek, mint a true és true

// OR (| = option + í)
console.log(true || true );     // true ugyan mint az AND true-true és false-false párosok
console.log(true || false );    // ellentétben az AND-el, itt true lesz
console.log( false || true );   // és itt is true lesz
console.log( false || false );  // false lesz

// Speckó karakterek:
console.log('Let\'s do it.');                                                                       // print: Let's do it.
console.log('Egyes idézőjellel az eredmény ugyanaz, mint dupla idézőjellel.');                      // '' idézőjelekben
console.log("Könnyebb megkülönböztetni a string-t, ha van benne \', ha dupla idézőjelbe tesszük");  // igy átláthatóbb.
console.log('"De forditva is lehet. Ha idézni szeretnék." - magamtól.');                            // kivül az egyes, belül a dupla, ha idézetről van szó



// STRING OPERATORS - szöveg összefűzés és szöveg és szám összefűzés - ez eaz egyik kedvencem :) 

console.log('Almás' + 'pite');              // Almáspite
console.log('My lucky number is: ' + 9);    // szóközre figyelni kell, különben nem lesz szép.



// maradék-os osztás nem ÷, hanem %
console.log(40 % 11);                       // print 
