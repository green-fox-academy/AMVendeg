// Bass Guitar (4 strings, 'Duum-duum-duum')

import { StringedInstrument } from "./stringedInstrument";

class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super('Bass guitar', numberOfStrings, 'Duum-duum-duum');
    }
}

export { BassGuitar };