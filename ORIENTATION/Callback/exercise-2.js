
// Exercise 2:
// Create a callback function which removes every second character from a string

const mapWith = (array, callback) => {
  let output = [];
  output = array.map((e) => callback(e)); 
  return output;
}

const words = ['map', 'reduce', 'filter'];

function removeSecondLetter(string) {
  let stringArr = string.split('');
  // console.log(stringArr);
  for (let i = stringArr.length - 1; i > 0; i--) {
    if (i % 2) {
      stringArr.splice(i, 1);
    }
  }
  return stringArr.join('');
};

console.log(mapWith(words, removeSecondLetter));

//  console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']