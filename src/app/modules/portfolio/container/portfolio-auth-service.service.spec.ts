import { TestBed } from '@angular/core/testing';

import { PortfolioAuthServiceService } from './portfolio-auth-service.service';

describe('PortfolioAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioAuthServiceService = TestBed.get(PortfolioAuthServiceService);
    expect(service).toBeTruthy();
  });
});
