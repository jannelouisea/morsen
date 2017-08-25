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

  morseToText: boolean;
  modeLabel: string;
  morseToTextLabel: string;
  textToMorseLabel: string;

  inputClass: string;
  inputMorseClass: string;
  inputTextClass: string;

  constructor (translationsManager: ManageTranslationsService, translator: MorseCodeTranslatorService) {
    this.morseCode = '';
    this.currTranslation = ' ';
    this.error = '';
    this.translations = translationsManager.getTranslations();
    this.translationsManager = translationsManager;
    this.translator = translator;
    this.morseToText = true;

    this.morseToTextLabel = 'M O R S E -> T E X T';
    this.textToMorseLabel = 'T E X T -> M O R S E';

    this.inputMorseClass = 'input-morse';
    this.inputTextClass = 'input-text';
    this.inputClass = this.morseToText ? this.inputMorseClass : this.inputTextClass;

    this.modeLabel = this.morseToText ? this.morseToTextLabel : this.textToMorseLabel;
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

  removeTranslation(event) {
    const translationId = event;
    this.translationsManager.removeTranslation(translationId);
    this.translations = this.translationsManager.getTranslations();
  }

  clearTranslations() {
    this.translationsManager.deleteAllTranslations();
    this.translations = this.translationsManager.getTranslations();
  }

  _keyPress(event: any) {
    const pattern = this.morseToText ? /[\.\- ]/ : /[A-Za-z\d\.\,?\-\/@()! ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  changeTranslationMode() {
    this.morseToText = !this.morseToText;
    this.modeLabel = this.morseToText ? this.morseToTextLabel : this.textToMorseLabel;
    this.inputClass = this.morseToText ? this.inputMorseClass : this.inputTextClass;
  }

}
