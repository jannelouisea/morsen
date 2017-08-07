import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTranslationComponent } from './saved-translation.component';

describe('SavedTranslationComponent', () => {
  let component: SavedTranslationComponent;
  let fixture: ComponentFixture<SavedTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
