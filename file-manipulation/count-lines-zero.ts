// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

import * as fs from 'fs';

fs.writeFileSync('my-file2.txt','');

function countLines(fileName: string) {

    // my-File.txt has 4 lines about Adele, my-file2 has no Letter, it has one line even if it's empty
    let fileLetters = fs.readFileSync('my-file2.txt', 'utf-8').split('');
   
    if (fileLetters.length === 0) {
        return 0;

    } else return fileLetters.length;
    
}

console.log(countLines('my-file2.txt'));
