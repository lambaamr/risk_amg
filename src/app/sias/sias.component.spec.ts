import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiasComponent } from './sias.component';

describe('SiasComponent', () => {
  let component: SiasComponent;
  let fixture: ComponentFixture<SiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
