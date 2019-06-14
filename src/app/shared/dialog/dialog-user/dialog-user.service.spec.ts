import { TestBed } from '@angular/core/testing';

import { DialogUserService } from './dialog-user.service';

describe('DialogUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogUserService = TestBed.get(DialogUserService);
    expect(service).toBeTruthy();
  });
});
