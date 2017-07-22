import { TestBed, inject } from '@angular/core/testing';

import { MorseCodeTranslatorService } from './morse-code-translator.service';

describe('MorseCodeTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorseCodeTranslatorService]
    });
  });

  it('should be created', inject([MorseCodeTranslatorService], (service: MorseCodeTranslatorService) => {
    expect(service).toBeTruthy();
  }));
});
