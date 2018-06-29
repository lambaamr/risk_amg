import { Component, EventEmitter, OnInit, Input, Output, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CurParticipantService } from '../participant/cur-participant.service';
import { Participant } from '../participant/participant';
import { ParticipantService } from '../participant/participant.service';

export enum KEY_CODE {
  f = 70,
  j = 74
}

@Component({
  selector: 'tg-amg-task1',
  templateUrl: './amg-task1.component.html',
  styleUrls: ['./amg-task1.component.css'],
  providers: [ ParticipantService ]
})


export class AmgTask1Component implements OnInit {
  @Input() page: number;
  @Input() text: string;
  @Input() imgSrc: string;
  @Input() maxPage: number;
  @Input() pages: number[];


  @Output() pageChange = new EventEmitter<number>();
  @Output() pagesChange = new EventEmitter<number[]>();
  @Output() keyPress = new EventEmitter<string>();

  isFixation: boolean;

  constructor(private curParticipantService: CurParticipantService,
              private participantService: ParticipantService,
              private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.isFixation && event.keyCode === KEY_CODE.f) {
      this.setFixation(1000, 'f');
    }

    if (!this.isFixation && event.keyCode === KEY_CODE.j) {
      this.setFixation(1000, 'j');
    }
  }

  initiateTask(): void {
    let page = this.pages.pop();
    this.setPage(page);
  }

  setPage(page: number): void {
    this.page = page;
    this.pageChange.emit(this.page);
    this.pagesChange.emit(this.pages);
  }

  setFixation(interval: number, key: string): void {
    this.keyPress.emit(key);
    if (this.pages.length > 0) {
      this.isFixation = true;
      setTimeout(() => {
        this.isFixation = false;
        let page = this.pages.pop();
        this.setPage(page);
      }, interval);
    } else {
        this.router.navigateByUrl('/end', { replaceUrl: true })
    }
  }
}
