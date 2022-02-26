'use strict';

import { transform } from "@babel/core";

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer



//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
  //	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  //	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
  //	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
  //]


  const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 2000 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 3000 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 0 }
  ];

let statusArr: any[] = [];
function getNameAndBalance(name: string) {
  for (let i: number = 0; i < accounts.length; i++) {
    if (accounts[i].clientName === name) {
      statusArr.push(accounts[i].clientName, accounts[i].balance);
      return statusArr;
    }
  }
}
console.log(getNameAndBalance('Igor'));


function transferAmount(
  accounts: any[], 
  fromAccountNumber: number, 
  toAccountNumber: number,
  amount: number ) {

  for (let i: number = 0; i < accounts.length; i++) {
    if (fromAccountNumber === accounts[i].accountNumber) {

      for (let j: number = 0; j < accounts.length; j++) {

        if (toAccountNumber === accounts[j].accountNumber) {
          accounts[j].balance += amount;
          accounts[i].balance -= amount;
        } else {
          return `404 - account not found`;
        }
      }
      
    } else {
      return `404 - account not found`;
    }
  }
  return accounts;
}

// transfer amount OK:
console.log(transferAmount(accounts, 43546731, 23456311, 1000));

// transfer amount - accountnumber is wrong
console.log(transferAmount(accounts, 43546730, 23456311, 1000));