// Create a method that decrypts reversed-order.txt

import * as fs from 'fs';

function reverseOrder(filename: string) {
  try {
    let convertTo = fs.readFileSync(filename, 'utf-8').split('\n');
   //  console.log(convertTo);
    let reversedArr = convertTo.reverse();
    let joinedToString: string = reversedArr.join('\n');
    fs.writeFileSync('output.txt', joinedToString);
  }
  catch (error) {
    return error;
  }
} 

reverseOrder('reverse-order.txt');
