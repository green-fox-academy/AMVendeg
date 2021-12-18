class Plants {
  public color: string;
  public waterAmount: number;

  constructor (color: string = '') {
    this.color = color;
    this.waterAmount = 0;
  }
}

export { Plants };