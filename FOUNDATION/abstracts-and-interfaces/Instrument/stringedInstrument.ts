// Next, we add another abstract class, StringedInstrument which extends Instrument
// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

import { Instrument } from "./instrument";

abstract class StringedInstrument extends Instrument{
  protected numberOfStrings: number;
  protected instrumentSound: string;

  constructor (name: string, numberOfStrings: number, instrumentSound: string) {
    super(name);
    this.numberOfStrings = numberOfStrings;
    this.instrumentSound = instrumentSound;
  }

  sound(): string {
    return this.instrumentSound;
  }

  play(): void {
    console.log(`The intrument is a(n): ${this.name}, with ${this.numberOfStrings} strings and goes like this: ${this.sound()}`);
  }
}

export { StringedInstrument };