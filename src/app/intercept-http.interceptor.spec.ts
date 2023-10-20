import { TestBed } from '@angular/core/testing';

import { InterceptHttpInterceptor } from './intercept-http.interceptor';

describe('InterceptHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptHttpInterceptor = TestBed.inject(InterceptHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
