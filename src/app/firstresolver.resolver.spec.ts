import { TestBed } from '@angular/core/testing';

import { FirstresolverResolver } from './firstresolver.resolver';

describe('FirstresolverResolver', () => {
  let resolver: FirstresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FirstresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
