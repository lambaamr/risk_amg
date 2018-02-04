import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CurParticipantService } from '../participant/cur-participant.service';

@Component({
  selector: 'tg-slot-instructions',
  templateUrl: './slot-instructions.component.html',
  styleUrls: ['./slot-instructions.component.css']
})

export class SlotInstructionsComponent implements OnInit {
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
