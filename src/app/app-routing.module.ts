import { Routes, RouterModule } from '@angular/router';

import { NameComponent } from './name/name.component';
import { GameComponent } from './game/game.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuizComponent } from './quiz/quiz.component';
import { OpponentSearchComponent } from './opponent-search/opponent-search.component';
import { CodeComponent } from './code/code.component';
import { PayoffComponent } from './payoff/payoff.component';
import { TerminationComponent } from './termination/termination.component';
import { InformedConsentComponent } from './informed-consent/informed-consent.component';
import { AmgTask2Component } from './amg-task2/amg-task2.component';
import { AmgTask1Component } from './amg-task1/amg-task1.component';
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

import { IpRouteGuardService } from './ip-route-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: NameComponent, canActivate: [IpRouteGuardService] },
  { path: 'informed-consent', component: InformedConsentComponent },
  { path: 'amg-task', component: AmgTask2Component },
  { path: 'game', component: GameComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'amg-instructions', component: AmgInstructions2Component },
  { path: 'slot-instructions', component: SlotInstructions2Component },
  { path: 'survey-instructions', component: SurveyInstructions2Component },
  { path: 'sias', component: SiasComponent },
  { path: 'ocir', component: OcirComponent },
  { path: 'gad', component: GadComponent },
  { path: 'cesd', component: CesdComponent },
  { path: 'amg-task', component: AmgTask2Component },
  { path: 'amg-prac', component: AmgPrac2Component },
  { path: 'game2', component: Game2Component },
  { path: 'trust-instructions', component: TrustInstructions2Component },
  { path: 'players-search', component: OpponentSearchComponent },
  { path: 'code', component: CodeComponent },
  { path: 'payoff', component: PayoffComponent },
  { path: 'end', component: TerminationComponent }
];

export const AppRouterModule = RouterModule.forRoot(routes);
