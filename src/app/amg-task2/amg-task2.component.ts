import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { AmgTask1Component } from '../amg-task1/amg-task1.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';


@Component({
  selector: 'tg-amg-task2',
  templateUrl: './amg-task2.component.html',
  styleUrls: ['./amg-task2.component.css'],
  providers: [ ParticipantService ]
})

export class AmgTask2Component implements OnDestroy {
  active: boolean = true;
  page: number = 0;
  amgtask: {page: number, text: string, imgSrc: string}[];
  maxPage: number;
  pages: number[];
  cond: string[];

  constructor(private router: Router,
             private participantService: ParticipantService,
             private curParticipantService: CurParticipantService,
             private http: Http) {
    this.http.get('/assets/amgtask.json')
              .takeWhile(() => this.active)
              .subscribe(res => {
                this.amgtask = res.json();
                this.maxPage = this.amgtask.length -1;
                this.pages = this.shuffle(this.maxPage);
                this.curParticipantService.pages = this.pages.slice();
                this.curParticipantService.cond = this.cond.slice();
                this.participantService.updateParticipant(this.curParticipantService.participant)
                .subscribe();
              });
  }

  ngOnDestroy() {
    this.active = false;
  }

  pageChange(page: number): void{
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
