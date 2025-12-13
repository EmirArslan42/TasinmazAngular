import { TestBed } from '@angular/core/testing';

import { CustomerrorInterceptor } from './customerror.interceptor';

describe('CustomerrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomerrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomerrorInterceptor = TestBed.inject(CustomerrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
