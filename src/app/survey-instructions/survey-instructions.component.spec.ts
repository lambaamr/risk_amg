import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyInstructionsComponent } from './survey-instructions.component';

describe('SurveyInstructionsComponent', () => {
  let component: SurveyInstructionsComponent;
  let fixture: ComponentFixture<SurveyInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
