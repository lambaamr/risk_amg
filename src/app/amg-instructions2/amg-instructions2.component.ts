import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


import { AmgInstructionsComponent } from '../amg-instructions/amg-instructions.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'tg-amg-instructions2',
  templateUrl: './amg-instructions2.component.html',
  styleUrls: ['./amg-instructions2.component.css']
})

export class AmgInstructions2Component implements OnDestroy {
  active: boolean = true;
  page: number = 1;
  amg_instructions: {page: number, text: string, imgSrc: string}[];
  maxPage: number;

  constructor(private http: Http) {
    this.http.get('/assets/amg_instructions.json')
              .takeWhile(() => this.active)
              .subscribe(res => {
                this.amg_instructions = res.json();
                this.maxPage = this.amg_instructions.length;
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
