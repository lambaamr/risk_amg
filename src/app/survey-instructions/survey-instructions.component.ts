import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'tg-survey-instructions',
  templateUrl: './survey-instructions.component.html',
  styleUrls: ['./survey-instructions.component.css']
})

export class SurveyInstructionsComponent implements OnInit {
  @Input() page: number;
  @Input() text: string;
  @Input() imgSrc: string;
  @Input() maxPage: number;

  @Output() pageChange = new EventEmitter<number>();

  constructor(private curParticipantService: CurParticipantService) { }

  ngOnInit() {
  }

  setPage(page: number): void {
    this.page = page;
    this.pageChange.emit(this.page);
  }
}
