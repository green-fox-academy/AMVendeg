// seconds-in-a-day
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

const endHour: number = 23;
const endMinutes: number = 59;
const endSeconds: number = 59;

function remainingTime(currentHour: number, currentMin: number, currentSec: number): void {
  const remainingHour: number = endHour-currentHour;
  const remainingMin: number = endMinutes-currentMin;
  const remainingSec: number = endSeconds - currentSec;
  console.log(`The remaining time of the day is: ${remainingHour}:${remainingMin}:${remainingSec}`);
  console.log(`The remaining time (in seconds) of the day is: ${remainingHour*(60*60)}:${remainingMin*60}:${remainingSec}`);
}
remainingTime(17,36,1);
