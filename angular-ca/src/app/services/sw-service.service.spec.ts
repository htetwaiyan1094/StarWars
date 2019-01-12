import { TestBed } from '@angular/core/testing';

import { SwServiceService } from './sw-service.service';

describe('SwServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwServiceService = TestBed.get(SwServiceService);
    expect(service).toBeTruthy();
  });
});
