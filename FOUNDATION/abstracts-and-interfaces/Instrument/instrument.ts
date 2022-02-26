// We start with a base, abstract class Instrument.
// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.

abstract class Instrument {
  protected name: string;
  
  constructor (name: string) {
    this.name = name;
  }

  abstract play(): void;
  
}

export { Instrument };
