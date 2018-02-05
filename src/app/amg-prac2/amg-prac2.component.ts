import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

import { AmgPrac1Component } from '../amg-prac1/amg-prac1.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'tg-amg-prac2',
  templateUrl: './amg-prac2.component.html',
  styleUrls: ['./amg-prac2.component.css']
})

export class AmgPrac2Component implements OnDestroy {
  active: boolean = true;
  page: number = 0;
  amgprac: {page: number, text: string, imgSrc: string}[];
  maxPage: number;
  pages: number[];

  constructor(private http: Http) {
    this.http.get('/assets/amgprac.json')
              .takeWhile(() => this.active)
              .subscribe(res => {
                this.amgprac = res.json();
                this.maxPage = this.amgprac.length -1;
                this.pages = this.shuffle(this.maxPage);
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
