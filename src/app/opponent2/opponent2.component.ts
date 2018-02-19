import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Opponent2 } from './opponent2';

@Component({
  selector: 'tg-opponent2',
  templateUrl: './opponent2.component.html',
  styleUrls: ['./opponent2.component.css'],
  animations: [
    trigger('highlight', [
      state('white', style({
        background: 'white'
      })),
      state('red', style({
        background: '#f71b44'
      })),
      transition('white => red', animate('300ms ease-in'))
    ])
  ]
})

export class Opponent2Component implements OnInit {
  @Input() id: number;
  @Input() meanProplt: number;
  @Input() name: string;
  @Input() directions: number[];
  @Input() img: string;
  @Input() highlight: string;

  private _machine: Opponent2;

  pixelPaths: {} = {
    blue: '/assets/images/pixel_blue.png',
    yellow: '/assets/images/pixel_yellow.png',
    orange: '/assets/images/pixel_orange.png'
  };

  constructor() {
  }

  get machine(): Opponent2 {
    return this._machine;
  }

  ngOnInit() {
    this._machine = new Opponent2(this.id, this.meanProplt, this.name);
  }
}
