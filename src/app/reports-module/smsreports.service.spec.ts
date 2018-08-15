import { TestBed, inject } from '@angular/core/testing';

import { SmsreportsService } from './smsreports.service';

describe('SmsreportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsreportsService]
    });
  });

  it('should be created', inject([SmsreportsService], (service: SmsreportsService) => {
    expect(service).toBeTruthy();
  }));
});
