import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgQuizComponent } from './amg-quiz.component';

describe('AmgQuizComponent', () => {
  let component: AmgQuizComponent;
  let fixture: ComponentFixture<AmgQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
