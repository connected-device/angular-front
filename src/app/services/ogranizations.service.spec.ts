import { TestBed } from '@angular/core/testing';

import { OgranizationsService } from './ogranizations.service';

describe('OgranizationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OgranizationsService = TestBed.get(OgranizationsService);
    expect(service).toBeTruthy();
  });
});
