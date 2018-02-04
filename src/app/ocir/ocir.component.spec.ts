import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcirComponent } from './ocir.component';

describe('OcirComponent', () => {
  let component: OcirComponent;
  let fixture: ComponentFixture<OcirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
