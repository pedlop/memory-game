import { TestBed } from '@angular/core/testing';

import { DialogStatisticsService } from './dialog-statistics.service';

describe('DialogStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogStatisticsService = TestBed.get(DialogStatisticsService);
    expect(service).toBeTruthy();
  });
});
