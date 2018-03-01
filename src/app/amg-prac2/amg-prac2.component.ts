import { Component, OnDestroy } from '@angular/core';
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
  page: number = 0;
  amgprac: {page: number, text: string, imgSrc: string}[];
  maxPage: number;
  pages: number[];
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
                this.pages = this.shuffle(this.maxPage);
                console.log("this.pages before " + this.pages);
                console.log("curPart pages before " + this.curParticipantService.pages);
                this.curParticipantService.pages = this.pages;
                this.participantService.updateParticipant(this.curParticipantService.participant)
                .subscribe();
                console.log("this.pages after " + this.pages);
                console.log("curPart pages after " + this.curParticipantService.pages);
              });
            }

  ngOnDestroy() {
    this.participantService.updateParticipant(this.curParticipantService.participant)
    .subscribe(() => console.log('success'));
    this.active = false;
  }

  pageChange(page: number): void {
    this.page = page;
  }

  pagesChange(pages: number[]): void {
    this.pages = pages;
  }

  // Generates a random permutation of integers in the range [low, high]
  shuffle(numPages: number) {
    let pages = Array.from(Array(numPages).keys()).map(num => num + 1);
    for (let i = numPages - 1; i > 0; i--) {
      const swap_idx = Math.floor(Math.random() * (i+1));
      let temp = pages[i];
      pages[i] = pages[swap_idx];
      pages[swap_idx] = temp;
    }
    return pages;
  }
}
