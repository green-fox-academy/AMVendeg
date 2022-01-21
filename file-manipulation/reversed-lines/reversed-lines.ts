/ Create a method that decrypts reversed-lines.txt

import * as fs from 'fs';

function reverseString (filename: string) {
  try {
    let convertTo = fs.readFileSync(filename, 'utf-8').split('');
      // console.log(convertTo);

    let reversedArray: string[] = convertTo.reverse();
    let toString: string = reversedArray.join('');
    fs.writeFileSync('output2.txt', toString);

  } catch (error) {
    console.log('There is a problem, Houston.');
    console.log(error);
  }
}

reverseString('reversed-lines.txt');
