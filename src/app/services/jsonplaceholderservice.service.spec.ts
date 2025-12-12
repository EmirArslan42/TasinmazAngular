import { TestBed } from '@angular/core/testing';

import { JsonplaceholderserviceService } from './jsonplaceholderservice.service';

describe('JsonplaceholderserviceService', () => {
  let service: JsonplaceholderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceholderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
