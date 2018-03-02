/*
 * Don't need to change *
 */
import { Component, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Http } from '@angular/http';

import { Opponent2Component } from '../opponent2/opponent2.component';
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
  @ViewChildren(Opponent2Component) opponent2s: QueryList<Opponent2Component>

  endowmentlt: number = 0.5;
  endowmentltSubmitted: boolean;
  flip: string = 'inactive';
  isGame2Over: boolean;
  inTrial: boolean;
  netGainlt: number = 0;
  opponent2: Opponent2Component;
  oppSelected: boolean;
  oppReturn: number;
  playerImgPath: string = '/assets/images/player_purple.png';
  trialNumber: number = 1;
  machineImgPaths: string[] = [
    '/assets/images/mach_blue.png',
    '/assets/images/mach_yellow.png',
    '/assets/images/mach_orange.png'
  ]
  initSettings: any[] = [
    { actualId: 1, proplt: .02, dir: [1, 1, -1] },
    { actualId: 2, proplt: .25, dir: [-1, 1, 1] },
    { actualId: 3, proplt: .45, dir: [-1, -1, 1] }
  ];
  oppSettings: {
    actualId: number,
    id: number,
    name: string,
    meanProplt: number,
    directions: number[],
    img: string,
    highlight: string
  }[];
  pixelPaths: {} = {
    blue: '/assets/images/pixel_blue.png',
    yellow: '/assets/images/pixel_yellow.png',
    orange: '/assets/images/pixel_orange.png'
  };
  oppArray: Opponent2Component[];

  constructor(private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private game2Service: Game2Service,
              private elementRef: ElementRef,
              private http: Http) {
    this.http.get('/assets/machines.json')
        .subscribe(res => {
          this.oppSettings = res.json();
          this.setInit(this.setColors.bind(this));
          this.setInit(this.setInitProportionlts.bind(this));
        });
  }

  /*
   * Angular lifecycle hooks
   */

  ngAfterViewInit() {
    this.opponent2s.changes.subscribe(() => {
      this.oppArray = this.opponent2s.toArray();
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
    this.endowmentltSubmitted = false;
    this.isGame2Over = this.game2Service.checkGame2Over(this.trialNumber);
    this.trialNumber++;
    this.flip = 'inactive';
    this.oppSelected = false;
  }

  selectOpponent2(): void {
    this.oppSelected = true;
    setTimeout(() => {
        this.inTrial = true;
        this.oppSettings[oppId].highlight = 'white';
        this.game2Service.endowmentltT0 = performance.now();
    }, 1200);
    let oppId = this.game2Service.getOppId(this.trialNumber);
    this.oppSettings[oppId].highlight = 'red';
    this.opponent2 = this.oppArray[oppId];
    this.drift();
    this.curParticipantService.addOpponent2(this.oppSettings[oppId].actualId);
    this.curParticipantService.addProportionlt(this.opponent2.machine.meanProplt);
  }

  setEndowmentlt() {
    this.endowmentltSubmitted = true;
    this.curParticipantService.addReact2Time(this.game2Service.getReact2Time());
    this.oppReturn = this.opponent2.machine.getReturnlt(this.endowmentlt);
    this.netGainlt = +((1 - this.endowmentlt + this.oppReturn).toFixed(2));
    this.curParticipantService.addEndowmentlt(this.endowmentlt);
    this.curParticipantService.addReturnlt(this.oppReturn);
    this.curParticipantService.addNetGainlt(this.netGainlt);
    this.curParticipantService.addActualProplt(this.opponent2.machine.proportionlt);
    this.flip = 'active';
  }

  /*
   * Helper functions
   */

  drift(): void {
    if (this.game2Service.inVolatilityPeriod(this.trialNumber)) {
      let dirIdx = this.game2Service.getDirectionsIdx(this.trialNumber);
      let direction = this.opponent2.directions[dirIdx];
      this.opponent2.machine.drift(direction);
    }
  }

  setInit(setCondition) {
    let oppOrder = this.game2Service.randomizeOpponent2s();
    this.oppSettings.forEach((opponent2, index) => {
      let oppId = oppOrder[index];
      setCondition(opponent2, oppId);
    });
  }

  setColors(opponent2: any, oppId: number): void {
    opponent2.img = this.machineImgPaths[oppId];
    opponent2.id = oppId + 1;
  }

  setInitProportionlts(opponent2: any, oppId: number): void {
    opponent2.meanProplt = this.initSettings[oppId].proplt;
    opponent2.directions = this.initSettings[oppId].dir;
    opponent2.actualId = this.initSettings[oppId].actualId;
  }
}
