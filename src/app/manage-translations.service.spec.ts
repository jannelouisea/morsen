import { TestBed, inject } from '@angular/core/testing';

import { ManageTranslationsService } from './manage-translations.service';

describe('SavedTranslationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageTranslationsService]
    });
  });

  it('should be created', inject([ManageTranslationsService], (service: ManageTranslationsService) => {
    expect(service).toBeTruthy();
  }));
});
