import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CesdComponent } from './cesd.component';

describe('CesdComponent', () => {
  let component: CesdComponent;
  let fixture: ComponentFixture<CesdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
