import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { AmgPrac1Component } from '../amg-prac1/amg-prac1.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { Participant } from '../participant/participant';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'tg-amg-prac2',
  templateUrl: './amg-prac2.component.html',
  styleUrls: ['./amg-prac2.component.css'],
  providers: [ ParticipantService ]
})

export class AmgPrac2Component implements OnDestroy {
  active: boolean = true;
  pracpage: number = 0;
  amgprac: {pracpage: number, text: string, imgSrc: string}[];
  maxpracPage: number;
  pracpages: number[];
  prackeyPresses: string[];
  prackeyPressesT0: number;
  prackeyPressesT1: number;

   constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private http: Http) {
          this.http.get('/assets/amgprac.json')
              .takeWhile(() => this.active)
              .subscribe(res => {
                this.amgprac = res.json();
                this.maxpracPage = this.amgprac.length -1;
                this.pracpages = this.shuffle(this.maxpracPage);
                this.curParticipantService.pracpages = this.pracpages.slice().reverse();
                this.prackeyPresses = [];
                this.curParticipantService.prackeyPresses = this.prackeyPresses;
              });
  }

  ngOnDestroy() {
    this.active = false;
    this.participantService.updateParticipant(this.curParticipantService.participant)
        .subscribe();
  }

  pracpageChange(pracpage: number): void {
    this.pracpage = pracpage;
  }

  pracpagesChange(pracpages: number[]): void {
    this.pracpages = pracpages;
    this.curParticipantService.addAmgReactTime(this.getAmgReactTime());
  }

  prackeyPress(key: string): void {
    this.prackeyPresses.push(key);
    this.prackeyPressesT0 = performance.now();
  }

  getAmgReactTime(): number {
    this.prackeyPressesT1 = performance.now();
    let amgreactTime = +(this.prackeyPressesT1 - this.prackeyPressesT0).toFixed(3);
    return amgreactTime;
  }
  // Generates a random permutation of integers in the range [low, high]
  shuffle(numpracPages: number) {
    let pracpages = Array.from(Array(numpracPages).keys()).map(num => num + 1);
    for (let i = numpracPages -1; i >= 0; i--) {
      const swap_idx = Math.floor(Math.random() * (i+1));
      let temp = pracpages[i];
      pracpages[i] = pracpages[swap_idx];
      pracpages[swap_idx] = temp;
    }
    return pracpages;
  }
}
