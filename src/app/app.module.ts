import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CurrencyPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeWhile';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { AppRouterModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { OpponentComponent } from './opponent/opponent.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { InstructionComponent } from './instruction/instruction.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { QuizComponent } from './quiz/quiz.component';
import { OpponentSearchComponent } from './opponent-search/opponent-search.component';
import { CodeComponent } from './code/code.component';
import { PayoffComponent } from './payoff/payoff.component';

import { IpRouteGuardService } from './ip-route-guard.service';
import { ParticipantService } from './participant/participant.service';
import { IpService } from './ip.service';
import { CapitalizePipe } from './capitalize.pipe';
import { TerminationComponent } from './termination/termination.component';
import { InformedConsentComponent } from './informed-consent/informed-consent.component';
import { AmgTask1Component } from './amg-task1/amg-task1.component';
import { AmgTask2Component } from './amg-task2/amg-task2.component';
import { AmgInstructionsComponent } from './amg-instructions/amg-instructions.component';
import { AmgInstructions2Component } from './amg-instructions2/amg-instructions2.component';
import { TrustInstructionsComponent } from './trust-instructions/trust-instructions.component';
import { TrustInstructions2Component } from './trust-instructions2/trust-instructions2.component';
import { SlotInstructionsComponent } from './slot-instructions/slot-instructions.component';
import { SlotInstructions2Component } from './slot-instructions2/slot-instructions2.component';
import { Game2Component } from './game2/game2.component';
import { SurveyInstructionsComponent } from './survey-instructions/survey-instructions.component';
import { SurveyInstructions2Component } from './survey-instructions2/survey-instructions2.component';
import { SiasComponent } from './sias/sias.component';
import { OcirComponent } from './ocir/ocir.component';
import { CesdComponent } from './cesd/cesd.component';
import { GadComponent } from './gad/gad.component';
import { AmgPrac1Component } from './amg-prac1/amg-prac1.component';
import { AmgPrac2Component } from './amg-prac2/amg-prac2.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    GameComponent,
    OpponentComponent,
    InstructionsComponent,
    InstructionComponent,
    NavButtonComponent,
    QuizComponent,
    OpponentSearchComponent,
    CodeComponent,
    PayoffComponent,
    CapitalizePipe,
    TerminationComponent,
    InformedConsentComponent,
    AmgTask1Component,
    AmgTask2Component,
    AmgInstructionsComponent,
    AmgInstructions2Component,
    TrustInstructionsComponent,
    TrustInstructions2Component,
    SlotInstructionsComponent,
    SlotInstructions2Component,
    Game2Component,
    SurveyInstructionsComponent,
    SurveyInstructions2Component,
    SiasComponent,
    OcirComponent,
    CesdComponent,
    GadComponent,
    AmgPrac1Component,
    AmgPrac2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    IpService,
    ParticipantService,
    IpRouteGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
