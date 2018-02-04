import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


import { TrustInstructionsComponent } from '../trust-instructions/trust-instructions.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'tg-trust-instructions2',
  templateUrl: './trust-instructions2.component.html',
  styleUrls: ['./trust-instructions2.component.css']
})

export class TrustInstructions2Component implements OnDestroy {
  active: boolean = true;
  page: number = 1;
  trust_instructions: {page: number, text: string, imgSrc: string}[];
  maxPage: number;

  constructor(private http: Http) {
    this.http.get('/assets/trust_instructions.json')
              .takeWhile(() => this.active)
              .subscribe(res => {
                this.trust_instructions = res.json();
                this.maxPage = this.trust_instructions.length;
              });
  }

  ngOnDestroy() {
    this.active = false;
  }

  setPage(page: number): void {
    this.page = page;
  }

  pageChange(page: number): void{
    this.page = page;
  }
}
