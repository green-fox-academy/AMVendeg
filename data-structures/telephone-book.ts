/* 
Create a map with the following key-value pairs:
Name (key)	Phone number (value)

What is John K. Miller's phone number?
Whose phone number is 307-687-2982?
Do we know Chris E. Myers' phone number? (yes/no)
The full output of your main method should be the following:

402-247-8568
Brooke P. Askew
no
*/

let phoneBook: { [key: string]: string } = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
};


// What is John K. Miller's phone number?
    console.log(phoneBook['John K. Miller']);


// Whose phone number is 307-687-2982?
    console.log(Object.keys(phoneBook)[4]);


// Do we know Chris E. Myers' phone number? (yes/no)
    if (Object.hasOwnProperty("Chris E. Myers") === true) {
        console.log("Yes we know");
    } else console.log("no");
