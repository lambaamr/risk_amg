import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustInstructions2Component } from './trust-instructions2.component';

describe('TrustInstructions2Component', () => {
  let component: TrustInstructions2Component;
  let fixture: ComponentFixture<TrustInstructions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustInstructions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustInstructions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
