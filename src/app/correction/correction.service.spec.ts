import { TestBed } from '@angular/core/testing';

import { CorrectionService } from './correction.service';

describe('CorrectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorrectionService = TestBed.get(CorrectionService);
    expect(service).toBeTruthy();
  });
});
