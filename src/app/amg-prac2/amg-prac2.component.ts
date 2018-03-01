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
  pracpages: number[];
  maxPage: number;
  amgPage: number[];

  constructor(private router: Router,
             private participantService: ParticipantService,
             private curParticipantService: CurParticipantService,
             private http: Http) {
         this.http.get('/assets/amgprac.json')
             .takeWhile(() => this.active)
             .subscribe(res => {
               this.amgprac = res.json();
               this.maxPage = this.amgprac.length -1;
               this.pracpages = this.shuffle(this.maxPage);
               console.log("this.pracpages before " + this.pracpages);
               console.log("curPart pracpages before " + this.curParticipantService.pracpages);
               this.curParticipantService.pracpages = this.pracpages;
               this.participantService.updateParticipant(this.curParticipantService.participant)
               .subscribe();
               console.log("this.pracpages after " + this.pracpages);
               console.log("curPart pracpages after " + this.curParticipantService.pracpages);
             });
           }

 ngOnDestroy() {
   this.participantService.updateParticipant(this.curParticipantService.participant)
   .subscribe(() => console.log('success'));
   this.active = false;
   console.log("curPart pracpages:" + this.curParticipantService.pracpages);
 }

  pageChange(pracpage: number): void {
    this.pracpage = pracpage;
  }

  pagesChange(pracpages: number[]): void {
    this.pracpages = pracpages;
  }

  // Generates a random permutation of integers in the range [low, high]
  shuffle(numPages: number) {
    let pracpages = Array.from(Array(numPages).keys()).map(num => num + 1);
    for (let i = numPages - 1; i > 0; i--) {
      const swap_idx = Math.floor(Math.random() * (i+1));
      let temp = pracpages[i];
      pracpages[i] = pracpages[swap_idx];
      pracpages[swap_idx] = temp;
    }
    return pracpages;
  }
}
