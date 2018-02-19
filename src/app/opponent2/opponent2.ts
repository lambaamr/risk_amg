export class Opponent2 {

  // Rate at which mean proportion drifts
  readonly rate: number = .04;

  private _id: number;
  private _meanProplt: number;
  private _name: string;
  private _proportionlt: number;

  constructor (
    id?: number,
    meanProplt?: number,
    name?: string
  ) {
    this._id = id;
    this._meanProplt = meanProplt;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get meanProplt(): number {
    return this._meanProplt;
  }

  set meanProplt(proplt: number) {
    this._meanProplt = proplt;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get proportionlt(): number {
    return this._proportionlt;
  }

  /*
   * Changes the mean proportion based on preset directions.
   * For the calculation, meanProp and rate are multiplied by 1000
   * in order to avoid JavaScript floating point precision issue.
   */
  drift(driftDirection: number): void {
    var meanPropltShifted = this._meanProplt * 1000;
    var rate = this.rate * 1000;
    if (driftDirection < 0 && (meanPropltShifted - rate) >= 0) {
      meanPropltShifted -= rate;
      this._meanProplt = meanPropltShifted / 1000;
    } else if (driftDirection > 0 &&  (meanPropltShifted + rate) <= 1000){
      meanPropltShifted += rate;
      this._meanProplt = meanPropltShifted / 1000;
    }
  }

  getReturnlt(endowment: number) {
    this._proportionlt = +(this.getProplt(this.meanProplt)).toFixed(3);
    return +((this._proportionlt * (4 * endowment)).toFixed(2));
  }

  getProplt(mean: number) {
    let min = mean - 0.02;
    let max = mean + 0.02;
    return Math.random() * (max - min) + min;
  }
}
