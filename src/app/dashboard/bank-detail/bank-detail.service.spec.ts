import { TestBed, inject } from '@angular/core/testing';

import { BankDetailService } from './bank-detail.service';

describe('BankDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankDetailService]
    });
  });

  it('should be created', inject([BankDetailService], (service: BankDetailService) => {
    expect(service).toBeTruthy();
  }));
});
