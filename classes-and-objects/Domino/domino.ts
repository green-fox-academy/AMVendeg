class Domino {
   values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  getValues(): number[] {
    return this.values;
  }

  bubble():void {
  }
}

export { Domino };
