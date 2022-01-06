// StingedInstrument has 3 descendants, namely:
// Electric Guitar (6 strings, 'Twang')

import { StringedInstrument } from "./stringedInstrument";

class ElectricGuitar extends StringedInstrument {
  
  constructor (numberOfStrings: number = 6) {
    super('Electric guitar', numberOfStrings, 'Twag');
  }
}

export { ElectricGuitar };