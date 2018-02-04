import { Component, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';


import { SurveyInstructionsComponent } from '../survey-instructions/survey-instructions.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'tg-survey-instructions2',
  templateUrl: './survey-instructions2.component.html',
  styleUrls: ['./survey-instructions2.component.css']
})

export class SurveyInstructions2Component implements OnDestroy {
  active: boolean = true;
  page: number = 1;
  survey_instructions: {page: number, text: string, imgSrc: string}[];
  maxPage: number;

  constructor(private http: Http) {
    this.http.get('/assets/survey_instructions.json')
              .takeWhile(() => this.active)
              .subscribe(res => {
                this.survey_instructions = res.json();
                this.maxPage = this.survey_instructions.length;
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
