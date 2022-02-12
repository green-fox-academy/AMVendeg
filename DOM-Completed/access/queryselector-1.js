// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.

// The King
let king = document.querySelector('#b325').textContent;
console.log(king);

// OR
let king2 = document.getElementById('#325').textContent;
console.log(king2);

// The Businessman and The Lamplighter
let businessLamp = (document.querySelectorAll('.asterod, .big'));
for (let i = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i].textContent);
}

// The King and The Conceited Man
let conceitedKing = (document.querySelectorAll('#b325, .b326'));
for (let i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].textContent);
}

// The King, The Conceited Man, The Lamplighter
let noBusiness = (document.querySelectorAll('.asteroid'));
for (let i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i].textContent);
}


