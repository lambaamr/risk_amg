import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgInstructions2Component } from './amg-instructions2.component';

describe('AmgInstructions2Component', () => {
  let component: AmgInstructions2Component;
  let fixture: ComponentFixture<AmgInstructions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgInstructions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgInstructions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
