import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

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

  ociranswer: { value: string }[] = [
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
  ociranswerSubmitted: boolean;
  feedback: {}
  numCorrect: number;
  quess: { ques: string, a: string, b: string, ans: string }[];
  OcirAnswer: string;

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
    let OcirAnswer = this.quess;
  }

  checkAnswer(): void {
    this.ociranswerSubmitted = true;
    this.participantService.updateParticipant(this.curParticipantService.participant)
                            .subscribe();
  }

  isValid(): boolean {
    let numAnswered = 0;
    this.ociranswer.forEach(ociranswer => {
      if (parseInt(ociranswer.value) > 0)
        numAnswered++;
    });
    return numAnswered === 18;
  }
}
