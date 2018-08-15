import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsreportsComponent } from './smsreports.component';

describe('SmsreportsComponent', () => {
  let component: SmsreportsComponent;
  let fixture: ComponentFixture<SmsreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
