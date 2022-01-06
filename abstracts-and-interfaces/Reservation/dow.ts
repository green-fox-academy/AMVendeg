// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.


import { Reservation } from './reservation';

class DowCode implements Reservation {
  days: string [] = [];
  bookedDay: string;
  codeNumber: string [] = [];
  code

  constructor() {
    this.days = ['MON', 'THU', 'WED', 'THUS', 'FRI', 'SAT', 'SUN'];
    this.bookedDay = '';
    this.codeNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  }

  getDowBooking(): string {
    let randomDay = Math.floor(Math.random() * (this.days.length - 1));
    return this.bookedDay = [this.days[randomDay]].toString();
  } 

  
  getCodeBooking(): string {
      

    return 
  }



  printStatus(): void {
    console.log(`random day: ${this.getDowBooking()}`);
  }
}

export { DowCode };
