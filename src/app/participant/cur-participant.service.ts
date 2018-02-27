import { Injectable } from '@angular/core';

import { Participant } from './participant';

@Injectable()
export class CurParticipantService {

  constructor() { }

  private _participant: Participant = {
    _id: '',
    age: 0,
    gender: '',
    ip: '',
    isComplete: false,
    numCorrect: 0,
    mturkCode: '',
    name: '',
    payoff: 0,
    actualProportion: [],
    endowment: [],
    netGains: [],
    proportion: [],
    opponentNumber: [],
    reactionTime: [],
    returned: [],
    endowmentlt: [],
    actualProportionlt: [],
    proportionlt: [],
    netGainslt: [],
    opponent2Number: [],
    reactionTimelt: [],
    returnedlt: [],
    ocirResponse: [],
    gadResponse: [],
    siasResponse: [],
    cesdResponse: [],
    pages: []
  };

  get participant(): Participant {
    return this._participant;
  }

  set id(id: string) {
    this._participant._id = id;
  }

  get age(): number {
    return this._participant.age;
  }

  set age(age: number) {
    this._participant.age = age;
  }

  get code(): string {
    return this._participant.mturkCode;
  }

  set code(mturkCode: string) {
    this._participant.mturkCode = mturkCode;
  }

  get gender(): string {
    return this._participant.gender;
  }

  set gender(gender: string) {
    this._participant.gender = gender;
  }

  get ip(): string {
    return this._participant.ip;
  }

  set ip(ip: string) {
    this._participant.ip = ip;
  }

  set isComplete(state: boolean) {
    this._participant.isComplete = state;
  }

  get numCorrect(): number {
    return this._participant.numCorrect;
  }

  set numCorrect(num: number) {
    this._participant.numCorrect = num;
  }

  get ocirResponse(): number[] {
    return this._participant.ocirResponse;
  }

  set ocirResponse(ocir: number[] ) {
    this._participant.ocirResponse = ocir;
  }

  get gadResponse(): number[] {
    return this._participant.gadResponse;
  }

  set gadResponse(gad: number[] ) {
    this._participant.gadResponse = gad;
  }

  get siasResponse(): number[] {
    return this._participant.siasResponse;
  }

  set siasResponse(sias: number[] ) {
    this._participant.siasResponse = sias;
  }

  get cesdResponse(): number[] {
    return this._participant.cesdResponse;
  }

  set cesdResponse(cesd: number[] ) {
    this._participant.cesdResponse = cesd;
  }

  get pages(): number[] {
    return this._participant.pages;
  }

  set pages(page: number[] ) {
    this._participant.pages = page;
  }

  get name(): string {
    return this._participant.name;
  }

  set name(firstName: string) {
    this._participant.name = firstName;
  }

  get payoff(): number {
    return this._participant.payoff;
  }

  set payoff(amount: number) {
    this._participant.payoff = amount;
  }

  get actualProportions(): number[] {
    return this._participant.actualProportion;
  }

  addActualProp(prop: number): void {
    this._participant.actualProportion.push(prop);
  }

  get actualProportionlts(): number[] {
    return this._participant.actualProportionlt;
  }

  addActualProplt(proplt: number): void {
    this._participant.actualProportionlt.push(proplt);
  }

  get netGains(): number[] {
    return this._participant.netGains;
  }

  addNetGain(amount: number): void {
    this._participant.netGains.push(amount);
  }

  get netGainslt(): number[] {
    return this._participant.netGainslt;
  }

  addNetGainlt(amount: number): void {
    this._participant.netGainslt.push(amount);
  }

  get opponents(): number[] {
    return this._participant.opponentNumber;
  }

  addOpponent(num: number): void {
    this._participant.opponentNumber.push(num);
  }

  get opponent2s(): number[] {
    return this._participant.opponent2Number;
  }

  addOpponent2(num: number): void {
    this._participant.opponent2Number.push(num);
  }

  get endowments(): number[] {
    return this._participant.endowment;
  }

  addEndowment(amount: number): void {
    this._participant.endowment.push(amount);
  }

  get endowmentlts(): number[] {
    return this._participant.endowmentlt;
  }

  addEndowmentlt(amount: number): void {
    this._participant.endowmentlt.push(amount);
  }

  get returns(): number[] {
    return this._participant.returned;
  }

  addReturn(amount: number): void {
    this._participant.returned.push(amount);
  }

  get returnslt(): number[] {
    return this._participant.returnedlt;
  }

  addReturnlt(amount: number): void {
    this._participant.returnedlt.push(amount);
  }

  get reactionTimes(): number[] {
    return this._participant.reactionTime;
  }

  addReactTime(time: number): void {
    this._participant.reactionTime.push(time);
  }


  get reactionTimeslt(): number[] {
    return this._participant.reactionTimelt;
  }

  addReactTimelt(time: number): void {
    this._participant.reactionTimelt.push(time);
  }

  get proportions(): number[] {
    return this._participant.proportion;
  }

  addProportion(proportion: number): void {
    this._participant.proportion.push(proportion);
  }

  get proportionlts(): number[] {
    return this._participant.proportionlt;
  }

  addProportionlt(proportionlt: number): void {
    this._participant.proportionlt.push(proportionlt);
  }
}
