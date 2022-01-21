// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio

import * as fs from 'fs';

function ipAddresses(filename: string): void {
  
  let ipAddress: string = '';
  let listOfIPs: string[] = [];
  
  try {
    let logFileArr: string [] = fs.readFileSync(filename, 'utf-8').split('\n');
    for (let i: number = 0; i < logFileArr.length; i++) {
      ipAddress = logFileArr[i].toString();
      ipAddress = ipAddress.slice(27,38);
      // console.log(ipAddress);
      listOfIPs.push(ipAddress);
    }
    console.log(listOfIPs);
  }
  catch (error) {
    console.log(error);
  }
}

ipAddresses('log.txt');


function getPostList(filename: string): void {
  
  let getPost: string = '';
  let listOfgetPost: string[] = [];
  
  try {
    let logFileArr: string [] = fs.readFileSync(filename, 'utf-8').split('\n');
    for (let i: number = 0; i < logFileArr.length; i++) {
      getPost = logFileArr[i].toString();
      getPost = getPost.slice(40,44);
      // console.log(ipAddress);
      listOfgetPost.push(getPost);
    }
    console.log(listOfgetPost);
  }
  catch (error) {
    console.log(error);
  }
}

getPostList('log.txt');