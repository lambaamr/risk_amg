import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'tg-amg-instructions',
  templateUrl: './amg-instructions.component.html',
  styleUrls: ['./amg-instructions.component.css']
})

export class AmgInstructionsComponent implements OnInit {
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
