import { Component, EventEmitter, OnInit, Input, Output, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CurParticipantService } from '../participant/cur-participant.service';

export enum KEY_CODE {
  f = 70,
  j = 74
}

@Component({
  selector: 'tg-amg-task1',
  templateUrl: './amg-task1.component.html',
  styleUrls: ['./amg-task1.component.css']
})


export class AmgTask1Component implements OnInit {
  @Input() page: number;
  @Input() text: string;
  @Input() imgSrc: string;
  @Input() maxPage: number;
  @Input() pages: number[];


  @Output() pageChange = new EventEmitter<number>();
  @Output() pagesChange = new EventEmitter<number[]>();

  isFixation: boolean;


  constructor(private curParticipantService: CurParticipantService,
              private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.isFixation && event.keyCode === KEY_CODE.f) {
      this.setFixation(1000);
    }

    if (!this.isFixation && event.keyCode === KEY_CODE.j) {
      this.setFixation(1000);
    }
  }

  setPage(page: number): void {
    this.page = page;
    console.log(this.pages);
    console.log(this.page);
    this.pageChange.emit(this.page);
    this.pagesChange.emit(this.pages);
  }

  setFixation(interval: number): void {
     if (this.pages.length > 0) {
       this.isFixation = true;
       setTimeout(() => {
         this.isFixation = false;
         let page = this.pages.pop();
         this.setPage(page);
       }, interval);
     } else {
     this.router.navigateByUrl('/trust-instructions', { replaceUrl: true })
     }
   }
}
