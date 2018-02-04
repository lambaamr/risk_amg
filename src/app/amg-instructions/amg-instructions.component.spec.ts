import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgInstructionsComponent } from './amg-instructions.component';

describe('AmgInstructionsComponent', () => {
  let component: AmgInstructionsComponent;
  let fixture: ComponentFixture<AmgInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
