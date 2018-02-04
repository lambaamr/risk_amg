import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyInstructions2Component } from './survey-instructions2.component';

describe('SurveyInstructions2Component', () => {
  let component: SurveyInstructions2Component;
  let fixture: ComponentFixture<SurveyInstructions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyInstructions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyInstructions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
