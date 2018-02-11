import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotQuizComponent } from './slot-quiz.component';

describe('SlotQuizComponent', () => {
  let component: SlotQuizComponent;
  let fixture: ComponentFixture<SlotQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
