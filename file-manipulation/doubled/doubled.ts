// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

import * as fs from 'fs';

function decryptDoubled(filename: string) {

    try {
        let encryptFile = fs.readFileSync(filename, 'utf-8').split('\n');

        for (let i: number = 0; i < encryptFile.length; i++) {
            for (let k: number = 0; k < encryptFile[i].length; k = k + 2) {
                fs.appendFileSync("output.txt", encryptFile[i][k]);
                
            }
        }
        // fel akartam darabolni a szöveget sortöréssel a mondatvégi pontnál - de ez még nem működik
        fs.readFileSync('output.txt', 'utf-8').split('\n');

    } catch (error) {
        console.log('File not found');
        console.log(error);
    }
}

decryptDoubled('duplicated-chars.txt');
