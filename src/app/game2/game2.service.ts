import { Injectable } from '@angular/core';

@Injectable()
export class Game2Service {
  readonly totalTrials = 3;

  endowmentltT0: number;
  endowmentltT1: number;
  oppIds: number[];

  constructor() { }

  checkGame2Over(trial: number): boolean {
    return trial === this.totalTrials;
  }

  /**
   * Returns the index of the drift direction in the directions array.
   * The direction index depends on the trial number.
   * E.g. during the first volatility period, the shift direction can be found
   * in directions[0].
   */
  getDirectionsIdx(trial: number) {
    return Math.floor(trial / 28);
  }

  getOppId(trial: number): number {
    if (trial % 3 === 1) {
      this.oppIds = this.randomizeOpponent2s();
    }
    return this.oppIds.shift();
  }

  getReactTimelt(): number {
    this.endowmentltT1 = performance.now();
    let reactTimelt = +(this.endowmentltT1 - this.endowmentltT0).toFixed(3);
    return reactTimelt;
  }

  inVolatilityPeriod(trial: number): boolean {
    let remainder = trial % 24;
    return trial > 10 && ((remainder >= 0 && remainder < 4) || (remainder > 12 && remainder < 24));
  }

  randomizeOpponent2s(): number[] {
    let ids = [];
    let id: number;
    for (let i = 0; i < 3; i++) {
      do {
        id = Math.floor(Math.random() * 3);
      } while (ids.includes(id));
      ids.push(id);
    }
    return ids;
  }
}
