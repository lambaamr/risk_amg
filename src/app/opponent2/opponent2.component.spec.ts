import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opponent2Component } from './opponent2.component';

describe('Opponent2Component', () => {
  let component: Opponent2Component;
  let fixture: ComponentFixture<Opponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
