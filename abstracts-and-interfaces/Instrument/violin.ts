// Violin (4 strings, 'Screech')

import { StringedInstrument } from "./stringedInstrument";

class Violin extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super('Violin', numberOfStrings, 'Screech');
  }
}

export { Violin };