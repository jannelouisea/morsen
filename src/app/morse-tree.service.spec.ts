import { TestBed, inject } from '@angular/core/testing';

import { MorseTreeService } from './morse-tree.service';

describe('MorseTreeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorseTreeService]
    });
  });

  it('should be created', inject([MorseTreeService], (service: MorseTreeService) => {
    expect(service).toBeTruthy();
  }));
});
