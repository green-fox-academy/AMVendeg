// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio

import * as fs from 'fs';

function ipAdresses(filename: string): string[] {

  try {
    let logFileArr: string [] = fs.readFileSync(filename, 'utf-8').split('\n');
    let ipAdress: string = '';
    let listOfIPs: string[] = [];

    for (let i: number = 0; i < logFileArr.length; i++) {
      ipAdress = logFileArr[i].toString();
      ipAdress = ipAdress.slice(27,38);
      // console.log(ipAddress);
      listOfIPs.push(ipAdress);
    }
    return listOfIPs;
  }
  catch (error) {
    console.log(error);
  }
}

ipAdresses('log.txt');
