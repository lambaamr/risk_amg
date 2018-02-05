import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgPrac2Component } from './amg-prac2.component';

describe('AmgPrac2Component', () => {
  let component: AmgPrac2Component;
  let fixture: ComponentFixture<AmgPrac2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgPrac2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgPrac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
