import { TestBed, inject } from '@angular/core/testing';

import { ServerAccessService } from './server-access.service';

describe('ServerAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerAccessService]
    });
  });

  it('should be created', inject([ServerAccessService], (service: ServerAccessService) => {
    expect(service).toBeTruthy();
  }));
});
