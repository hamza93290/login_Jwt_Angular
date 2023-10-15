import { TestBed } from '@angular/core/testing';

import { AuthInjectableService } from './auth-injectable.service';

describe('AuthInjectableService', () => {
  let service: AuthInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
