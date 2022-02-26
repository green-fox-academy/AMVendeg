import { SpaceLocation } from "./SpaceLocation";
import { getDaysToLocation } from "./explorers";

export class SpaceCraft {
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  } 

  printDaysToLocation(location: SpaceLocation): string {
    return `The ${this.name} needs ${getDaysToLocation(location.kilometersAway)} days to get ${location.name}.`
  }
}
