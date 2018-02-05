import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgPrac1Component } from './amg-prac1.component';

describe('AmgPrac1Component', () => {
  let component: AmgPrac1Component;
  let fixture: ComponentFixture<AmgPrac1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgPrac1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgPrac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
