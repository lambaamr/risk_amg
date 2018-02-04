import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgTask2Component } from './amg-task2.component';

describe('AmgTask2Component', () => {
  let component: AmgTask2Component;
  let fixture: ComponentFixture<AmgTask2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgTask2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
