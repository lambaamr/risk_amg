import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotInstructionsComponent } from './slot-instructions.component';

describe('SlotInstructionsComponent', () => {
  let component: SlotInstructionsComponent;
  let fixture: ComponentFixture<SlotInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
