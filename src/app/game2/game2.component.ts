/*
 * Don't need to change *
 */
import { Component, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Http } from '@angular/http';

import { OpponentComponent } from '../opponent/opponent.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { ParticipantService } from '../participant/participant.service';
import { CurParticipantService } from '../participant/cur-participant.service';
import { Game2Service } from './game2.service';

/*
 * Don't need to change *
 */

@Component({
  selector: 'tg-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css'],
  providers: [ ParticipantService,
               Game2Service
  ],
  animations: [
    trigger('flip', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
      })),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
  ]
})

export class Game2Component implements AfterViewInit, OnDestroy {
  @ViewChildren(OpponentComponent) opponents: QueryList<OpponentComponent>

  endowment: number = 0.5;
  endowmentSubmitted: boolean;
  flip: string = 'inactive';
  isGame2Over: boolean;
  inTrial: boolean;
  netGain: number = 0;
  opponent: OpponentComponent;
  oppSelected: boolean;
  oppReturn: number;
  playerImgPath: string = '/assets/images/player_purple.png';
  trialNumber: number = 1;
  imgPaths: string[] = [
    '/assets/images/machine_blue.png',
    '/assets/images/machine_yellow.png',
    '/assets/images/machine_orange.png'
  ]
  initSettings: any[] = [
    { actualId: 1, prop: .02, dir: [1, 1, -1] },
    { actualId: 2, prop: .25, dir: [-1, 1, 1] },
    { actualId: 3, prop: .45, dir: [-1, -1, 1] }
  ];
  oppSettings: {
    actualId: number,
    id: number,
    name: string,
    meanProp: number,
    directions: number[],
    img: string,
    highlight: string
  }[];
  pixelPaths: {} = {
    blue: '/assets/images/pixel_blue.png',
    yellow: '/assets/images/pixel_yellow.png',
    orange: '/assets/images/pixel_orange.png'
  };
  oppArray: OpponentComponent[];

  constructor(private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private game2Service: Game2Service,
              private elementRef: ElementRef,
              private http: Http) {
    this.http.get('/assets/machines.json')
        .subscribe(res => {
          this.oppSettings = res.json();
          this.setInit(this.setColors.bind(this));
          this.setInit(this.setInitProportions.bind(this));
        });
  }

  /*
   * Angular lifecycle hooks
   */

  ngAfterViewInit() {
    this.opponents.changes.subscribe(() => {
      this.oppArray = this.opponents.toArray();
    });
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FDFBEB';
  }

  ngOnDestroy() {
    this.participantService.updateParticipant(this.curParticipantService.participant)
                            .subscribe();
  }

  /*
   * Component functions called when buttons clicked
   */

  nextTrial(): void {
    this.inTrial = false;
    this.endowmentSubmitted = false;
    this.isGame2Over = this.game2Service.checkGame2Over(this.trialNumber);
    this.trialNumber++;
    this.flip = 'inactive';
    this.oppSelected = false;
  }

  selectOpponent(): void {
    this.oppSelected = true;
    setTimeout(() => {
        this.inTrial = true;
        this.oppSettings[oppId].highlight = 'white';
    }, 1200);
    let oppId = this.game2Service.getOppId(this.trialNumber);
    this.oppSettings[oppId].highlight = 'red';
    this.opponent = this.oppArray[oppId];
    this.drift();
    this.curParticipantService.addOpponent(this.oppSettings[oppId].actualId);
    this.curParticipantService.addProportion(this.opponent.player.meanProp);
    this.game2Service.setDelay('isWaitingForOpp', 0.5, 500);
  }

  setEndowment() {
    this.endowmentSubmitted = true;
    this.curParticipantService.addReactTime(this.game2Service.getReactTime());
    this.oppReturn = this.opponent.player.getReturn(this.endowment);
    this.netGain = +((1 - this.endowment + this.oppReturn).toFixed(2));
    this.curParticipantService.addEndowment(this.endowment);
    this.curParticipantService.addReturn(this.oppReturn);
    this.curParticipantService.addNetGain(this.netGain);
    this.curParticipantService.addActualProp(this.opponent.player.proportion);
    this.game2Service.setDelay('isWaitingForReturn', 1, 1000);
    this.flip = 'active';
  }

  /*
   * Helper functions
   */

  drift(): void {
    if (this.game2Service.inVolatilityPeriod(this.trialNumber)) {
      let dirIdx = this.game2Service.getDirectionsIdx(this.trialNumber);
      let direction = this.opponent.directions[dirIdx];
      this.opponent.player.drift(direction);
    }
  }

  setInit(setCondition) {
    let oppOrder = this.game2Service.randomizeOpponents();
    this.oppSettings.forEach((opponent, index) => {
      let oppId = oppOrder[index];
      setCondition(opponent, oppId);
    });
  }

  setColors(opponent: any, oppId: number): void {
    opponent.img = this.imgPaths[oppId];
    opponent.id = oppId + 1;
  }

  setInitProportions(opponent: any, oppId: number): void {
    opponent.meanProp = this.initSettings[oppId].prop;
    opponent.directions = this.initSettings[oppId].dir;
    opponent.actualId = this.initSettings[oppId].actualId;
  }
}
