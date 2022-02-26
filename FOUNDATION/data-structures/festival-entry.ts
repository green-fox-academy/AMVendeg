'use strict';

const watchlist: string[] = [];
const goList: string[] = [];

let securityAlcoholLoot: number = 0;

 type FestivalGoer = {
 name: string;
 alcohol: number;
 guns: number
};

let queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Create a securityCheck function that takes the queue as a parameter 
//and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) 
// and let them enter the festival
// not ready yet

function securityCheck(queue: FestivalGoer[]): string[] {
  for (let i: number = 0; i < queue.length; i++) {
    if (queue[i].guns > 0) {
      watchlist.push(queue[i].name);
    } else if (queue[i].alcohol > 0) {
      securityAlcoholLoot += queue[i].alcohol;
      queue[i].alcohol = 0;
    } else {
      goList.push(queue[i].name);
    }
  } 
  return goList;
}

// console.log(queue);
// console.log(watchlist);
console.log(securityCheck(queue));

