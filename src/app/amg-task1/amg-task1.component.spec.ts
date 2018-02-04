import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgTask1Component } from './amg-task1/amg-task1.component';

describe('AmgTask1Component', () => {
  let component: AmgTask1Component;
  let fixture: ComponentFixture<AmgTask1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgTask1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
