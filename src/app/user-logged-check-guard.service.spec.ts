import { TestBed, inject } from '@angular/core/testing';

import { UserLoggedCheckGuardService } from './user-logged-check-guard.service';

describe('UserLoggedCheckGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLoggedCheckGuardService]
    });
  });

  it('should be created', inject([UserLoggedCheckGuardService], (service: UserLoggedCheckGuardService) => {
    expect(service).toBeTruthy();
  }));
});
