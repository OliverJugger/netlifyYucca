import { TestBed } from '@angular/core/testing';

import { SousDomaineService } from './sous-domaine.service';

describe('SousDomaineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SousDomaineService = TestBed.get(SousDomaineService);
    expect(service).toBeTruthy();
  });
});
