import { TestBed, inject } from '@angular/core/testing';

import { TextToMorseTranslatorService } from './text-to-morse-translator.service';

describe('TextToMorseTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextToMorseTranslatorService]
    });
  });

  it('should be created', inject([TextToMorseTranslatorService], (service: TextToMorseTranslatorService) => {
    expect(service).toBeTruthy();
  }));
});
