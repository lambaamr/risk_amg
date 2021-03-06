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
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' }
  ]

  answersSubmitted: boolean;
  feedback: {}
  ocirResponse: number[];
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

  checkAnswer(answers: string[]): void {
    this.answersSubmitted = true;
    this.ocirResponse = this.answers.map(answer => +(answer.value));
    this.curParticipantService.ocirResponse = this.ocirResponse;
    this.participantService.updateParticipant(this.curParticipantService.participant)
                                  .subscribe();

  }


  isValid(): boolean {
    let ocirResponse = 0;
    this.answers.forEach(answer => {
      if (parseInt(answer.value) > 0)
        ocirResponse++;
    });
    return ocirResponse === 18;
  }
}
