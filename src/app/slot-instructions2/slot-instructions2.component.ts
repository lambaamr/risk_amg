import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


import { SlotInstructionsComponent } from '../slot-instructions/slot-instructions.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'tg-slot-instructions2',
  templateUrl: './slot-instructions2.component.html',
  styleUrls: ['./slot-instructions2.component.css']
})

export class SlotInstructions2Component implements OnDestroy {
  active: boolean = true;
  page: number = 1;
  slot_instructions: {page: number, text: string, imgSrc: string}[];
  maxPage: number;

  constructor(private http: Http) {
    this.http.get('/assets/slot_instructions.json')
              .takeWhile(() => this.active)
              .subscribe(res => {
                this.slot_instructions = res.json();
                this.maxPage = this.slot_instructions.length;
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
