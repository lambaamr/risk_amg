import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Participant } from '../participant/participant';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'tg-suspicion-check',
  templateUrl: './suspicion-check.component.html',
  styleUrls: ['./suspicion-check.component.css'],
  providers: [ ParticipantService ]
})

export class SuspicionCheckComponent {
  answers: { value: string }[] = [
    { value: '' }
  ]

  answersSubmitted: boolean;
  feedback: {}
  suspicionResponse: number[];
  quess: { ques: string, a: string, b: string, resp: string }[];

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private http: Http) {
    this.http.get('/assets/suspicion.json')
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
    this.suspicionResponse = this.answers.map(answer => +(answer.value));
    this.curParticipantService.suspicionResponse = this.suspicionResponse;
    this.participantService.updateParticipant(this.curParticipantService.participant)
                                  .subscribe();

  }


  isValid(): boolean {
    let suspicionResponse = 0;
    this.answers.forEach(answer => {
      if (parseInt(answer.value) > 0)
        suspicionResponse++;
    });
    return suspicionResponse === 1;
  }
}
