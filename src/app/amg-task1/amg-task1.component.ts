import { Component, EventEmitter, OnInit, Input, Output, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CurParticipantService } from '../participant/cur-participant.service';
import { Participant } from '../participant/participant';
import { ParticipantService } from '../participant/participant.service';
import { AmgTask2Component  } from '../amg-task2/amg-task2.component';


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
  keyPressesT0: number;
  keyPressesT1: number;


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

  getAmgReactTime(): number {
    this.keyPressesT1 = performance.now();
    let amgreactTime = +(this.keyPressesT1 - this.keyPressesT0).toFixed(3);
    return amgreactTime;
  }

  setPage(page: number): void {
    this.page = page;
    this.keyPressesT0 = performance.now();
    this.pageChange.emit(this.page);
    this.pagesChange.emit(this.pages);
    this.curParticipantService.addAmgReactTime(this.getAmgReactTime());
  }

  setFixation(interval: number, key: string): void {
     if (this.pages.length > 0) {
       this.isFixation = true;
       setTimeout(() => {
         this.isFixation = false;
         let page = this.pages.pop();
         this.setPage(page);
         this.keyPress.emit(key);
       }, interval);
     } else {
     this.router.navigateByUrl('/part2-instructions', { replaceUrl: true })
     }
   }
}
