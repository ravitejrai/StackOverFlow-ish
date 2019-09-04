import { TestBed } from '@angular/core/testing';

import { SearchstockService } from './searchstock.service';

describe('SearchstockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchstockService = TestBed.get(SearchstockService);
    expect(service).toBeTruthy();
  });
});
