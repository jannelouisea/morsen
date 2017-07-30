import { Component } from '@angular/core';
import { ManageTranslationsService } from './manage-translations.service';
import { Translation } from './translation';
import { MorseCodeTranslatorService } from './morse-code-translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ManageTranslationsService, MorseCodeTranslatorService]
})
export class AppComponent {
  title = 'M O R S E N';
  maxInputChars = 50;

  morseCode: string;
  currTranslation: string;
  error: string;
  translations: Translation[];
  translationsManager: ManageTranslationsService;
  translator: MorseCodeTranslatorService;

  constructor (translationsManager: ManageTranslationsService, translator: MorseCodeTranslatorService) {
    this.morseCode = '';
    this.currTranslation = ' ';
    this.error = '';
    this.translations = translationsManager.getTranslations();
    this.translationsManager = translationsManager;
    this.translator = translator;
  }

  translateMorse(morseCode: string) {
    this.morseCode = morseCode;
    this.currTranslation = this.translator.translateMorse(morseCode);
  }

  saveTranslation() {
    if (this.morseCode !== '' && this.currTranslation !== '') {
      this.translationsManager.addTranslation(this.morseCode, this.currTranslation);
      this.morseCode = '';
      this.currTranslation = '';
    }
  }

  clearTranslations() {
    this.translationsManager.deleteAllTranslations();
    this.translations = this.translationsManager.getTranslations();
  }

  _keyPress(event: any) {
    const pattern = /[\.\- ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
