// Swear words
// Write a method which can read and parse a file containing not so 
//family friendly text. 
// The method must remove all the given words from the file 
//and return the amount of the removed words.

// Example
// Example file can be found here.

// Input
// ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
// Output
// 18

import * as fs from 'fs';

function readParse (filename: string) {

  try {
    let myFile: string [] = fs.readFileSync(filename, 'utf-8').split(' ');
    let tempArr: string [] = myFile;
    let unfriendlyWords: string [] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];
    // console.log(myFile.length); test make array: OK

    for (let i = 0; i < unfriendlyWords.length; i++) {
        let arrLength: number  = myFile.length;
        for (let j = 0; j < arrLength; j++) {
            if (unfriendlyWords[i] == myFile[j]) {
              myFile = myFile.slice(0, j).concat(myFile.slice(j + 1, arrLength));
            }
        }
    }
    
    return tempArr.length - myFile.length;

    } catch (error) {
        // console.log(error);
        console.log('Houston, we have a problem.');
      }
}

console.log(readParse('content.txt'));

