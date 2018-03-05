import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspicionCheckComponent } from './suspicion-check.component';

describe('SuspicionCheckComponent', () => {
  let component: SuspicionCheckComponent;
  let fixture: ComponentFixture<SuspicionCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspicionCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspicionCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
