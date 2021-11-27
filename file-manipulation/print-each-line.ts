// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

import * as fs from 'fs';

// note myself: a lényeg, hogy a try-ba irok mindent ami hibára futhat, catch-be pedig az error message-t

    try {
        fs.writeFileSync('my-file.txt', 'hello from the other siiiidee, \n i am an Adele fan');
        let myFile = fs.readFileSync('my-file.txt', 'utf-8');
        console.log(myFile);

    } catch (error) {
        console.log('nem található Adele fájl');
    }

