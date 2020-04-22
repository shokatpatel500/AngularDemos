import { TestBed } from '@angular/core/testing';

import { VehicalsService } from './vehicals.service';

describe('VehicalsService', () => {
  let service: VehicalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
