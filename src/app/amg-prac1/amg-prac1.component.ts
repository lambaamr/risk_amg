import { Component, EventEmitter, OnInit, Input, Output, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CurParticipantService } from '../participant/cur-participant.service';

export enum KEY_CODE {
  e = 69,
  i = 73
}

@Component({
  selector: 'tg-amg-prac1',
  templateUrl: './amg-prac1.component.html',
  styleUrls: ['./amg-prac1.component.css']
})


export class AmgPrac1Component implements OnInit {
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
    if (!this.isFixation && event.keyCode === KEY_CODE.e) {
      this.setFixation(1000);
    }

    if (!this.isFixation && event.keyCode === KEY_CODE.i) {
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
     this.router.navigateByUrl('/amg-task', { replaceUrl: true })
     }
   }
}
