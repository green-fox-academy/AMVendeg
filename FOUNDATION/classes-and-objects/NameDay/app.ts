import { NameDay } from "./agota";

// write to file alt version: ts-node app.ts > agotaLog.txt 
// all the class properties and method results go into one file
// looks like an object

  let agota = new NameDay('Ágota', '11-01-2022');
  console.log(agota.congrat());
  console.log(agota.surprise());
  agota.nameLetterCounter('ágota');
  console.log(agota.happinessCounter());
  console.log(agota.nameOfAncientScandinavian());
