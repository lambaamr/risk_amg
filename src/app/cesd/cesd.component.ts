import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Participant } from '../participant/participant';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'tg-cesd',
  templateUrl: './cesd.component.html',
  styleUrls: ['./cesd.component.css'],
  providers: [ ParticipantService ]
})

export class CesdComponent {
  answers: { value: string }[] = [
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' }
  ]
  answersSubmitted: boolean;
  feedback: {}
  cesdResponse: number[];
  quess: { ques: string, a: string, b: string, ans: string }[];

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private http: Http) {
    this.http.get('/assets/cesd.json')
            .subscribe(res => {
              this.quess = res.json();
            });
    this.http.get('/assets/attention_check_feedback.json')
            .subscribe(res => {
              this.feedback = res.json();
            });
  }

  checkAnswer(answers: string[]): void {
    this.answersSubmitted = true;
    this.cesdResponse = this.answers.map(answer => +(answer.value));
    this.curParticipantService.cesdResponse = this.cesdResponse;
    this.participantService.updateParticipant(this.curParticipantService.participant)
                                  .subscribe();

  }

  isValid(): boolean {
    let cesdResponse = 0;
    this.answers.forEach(answer => {
      if (parseInt(answer.value) > 0)
        cesdResponse++;
    });
    return cesdResponse === 20;
  }
}
