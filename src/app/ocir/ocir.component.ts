import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Participant } from '../participant/participant';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'tg-ocir',
  templateUrl: './ocir.component.html',
  styleUrls: ['./ocir.component.css'],
  providers: [ ParticipantService ]
})

export class OcirComponent {
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
    { value: '0' }
  ]

  answersSubmitted: boolean;
  feedback: {}
  namCorrect: number;
  quess: { ques: string, a: string, b: string, resp: string }[];
  givenResponse: string;

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private http: Http) {
    this.http.get('/assets/ocir.json')
            .subscribe(res => {
              this.quess = res.json();
            });
    this.http.get('/assets/attention_check_feedback.json')
            .subscribe(res => {
              this.feedback = res.json();
            });
  }

  checkAnswer(): void {
    this.answersSubmitted = true;
    this.namCorrect = this.answers.map((answer, idx) => {
      return +(answer.value);
    })
    .reduce((answer, idx) => {return answer}, 0);
    this.curParticipantService.namCorrect = this.namCorrect;
    this.participantService.updateParticipant(this.curParticipantService.participant)
                            .subscribe();
  }

  isValid(): boolean {
    let numAnswered = 0;
    this.answers.forEach(answer => {
      if (parseInt(answer.value) > 0)
        numAnswered++;
    });
    return numAnswered === 18;
  }
}
