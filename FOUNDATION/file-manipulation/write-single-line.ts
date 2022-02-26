// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

import * as fs from 'fs';

function writeSingleLine (name: string) {
    try {
        fs.writeFileSync('my-file.txt', name);
        let myFile = fs.readFileSync('my-file-txt', 'utf-8');
        console.log(myFile);
    
    } catch (error) {
        console.log('Unable to write file: my-file.txt');
    }
}

console.log(writeSingleLine('Jones'));