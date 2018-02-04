import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustInstructionsComponent } from './trust-instructions.component';

describe('TrustInstructionsComponent', () => {
  let component: TrustInstructionsComponent;
  let fixture: ComponentFixture<TrustInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
