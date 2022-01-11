import { NameDay } from "./agota";
  
  let agota = new NameDay('Ágota', '11-01-2022');
  console.log(agota.congrat());
  agota.surprise();
  agota.nameLetterCounter('ágota');
  console.log(agota.happinessCounter());
  console.log(agota.nameOfAncientScandinavian());