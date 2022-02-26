/*




*/

// objectum ami már veget ert és 12 az eredménye
// Promise.resolve(12);

// objektum ami már "veget" ert, nem jo aggal és 12
// Promise.reject(12);

// miért hasznalunk promise-okat:
// aszinkron function-oknél, IO methods-nál, CPU/memory intensive
// nem szeretnénk h megálljon abban a sorban a kódunk
// várunk 5 mp-t és azután történik a vmi

// const factorial = new Promise((resolve, _reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 5000);
// });

// factorial
// .then((result) => console.log(result))
// .catch((err) => console.log(err));

//50% eséy 
const coinFlip = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < .5) {
      resolve(1)
    }
    reject(1);
  }, 5000);
});

coinFlip
  .then((result) => console.log(`HEAD` + result))
  .catch((err) => console.log(`TAIL ` + err))
  .finally(() => console.info('Flipped that coin!'));


  // What is "_"? Array destructálás:
  // ha nem használok egy paramétert, de kell azért h ott legyen, különben a TS kiabál, h nincs ott
  // pl. a reject-t nem hazsnálom, de amugy kell h paraméterként ott legyen


