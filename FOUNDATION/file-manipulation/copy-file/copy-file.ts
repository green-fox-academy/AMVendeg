// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

import * as fs from 'fs';


function copyContentAnotherFile (copyFile: string, pasteFile: string) {

    try {
        fs.writeFileSync(pasteFile, fs.readFileSync(copyFile), 'utf-8');
        return console.log(true);
    }
    catch (error) {
        console.log('There is a problem, Houston');
        console.log(error);
    }
}

copyContentAnotherFile('maciLog.txt', 'newMaciLog.txt');
