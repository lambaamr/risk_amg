import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotInstructions2Component } from './slot-instructions2.component';

describe('SlotInstructions2Component', () => {
  let component: SlotInstructions2Component;
  let fixture: ComponentFixture<SlotInstructions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotInstructions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotInstructions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
