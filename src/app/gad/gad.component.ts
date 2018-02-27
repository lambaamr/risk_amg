import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Participant } from '../participant/participant';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'tg-gad',
  templateUrl: './gad.component.html',
  styleUrls: ['./gad.component.css'],
  providers: [ ParticipantService ]
})

export class GadComponent {
  answers: { value: string }[] = [
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
  gadResponse: number[];
  quess: { ques: string, a: string, b: string, ans: string }[];

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private http: Http) {
    this.http.get('/assets/gad.json')
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
    this.gadResponse = this.answers.map(answer => +(answer.value));
    this.curParticipantService.gadResponse = this.gadResponse;
    this.participantService.updateParticipant(this.curParticipantService.participant)
                                  .subscribe();

  }

  isValid(): boolean {
    let gadResponse = 0;
    this.answers.forEach(answer => {
      if (parseInt(answer.value) > 0)
        gadResponse++;
    });
    return gadResponse === 8;
  }
}
