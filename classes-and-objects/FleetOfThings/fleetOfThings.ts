import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Create a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let getMilk = new Thing('Get milk');
fleet.add(getMilk);

let removeObstacles = new Thing('Remove the obstacles');
fleet.add(removeObstacles);

let standUp = new Thing('Stand up');
fleet.add(standUp);
standUp.complete();

let eatLunch = new Thing('Eat lunch');
fleet.add(eatLunch);
eatLunch.complete();

fleet.getThings();
console.log(fleet.toString());
