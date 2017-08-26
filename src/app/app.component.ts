import { Component } from '@angular/core';
import { ManageTranslationsService } from './manage-translations.service';
import { Translation } from './translation';
import { MorseCodeTranslatorService } from './morse-code-translator.service';
import { TextToMorseTranslatorService } from './text-to-morse-translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ManageTranslationsService,
              MorseCodeTranslatorService,
              TextToMorseTranslatorService]
})
export class AppComponent {
  title = 'M O R S E N';
  maxInputChars: number;

  morseCode: string;
  currTranslation: string;
  error: string;
  translations: Translation[];
  translationsManager: ManageTranslationsService;
  translator: MorseCodeTranslatorService;
  textTranslator: TextToMorseTranslatorService;

  morseToText: boolean;
  modeLabel: string;
  morseToTextLabel: string;
  textToMorseLabel: string;

  inputClass: string;
  inputMorseClass: string;
  inputTextClass: string;

  constructor (translationsManager: ManageTranslationsService,
               translator: MorseCodeTranslatorService,
               textTranslator: TextToMorseTranslatorService) {
    this.morseCode = '';
    this.currTranslation = '';
    this.error = '';
    this.translations = translationsManager.getTranslations();
    this.translationsManager = translationsManager;
    this.translator = translator;
    this.textTranslator = textTranslator;
    this.morseToText = false;

    this.maxInputChars = this.morseToText ? 50 : 20;

    this.morseToTextLabel = 'M O R S E           to  T E X T';
    this.textToMorseLabel = 'T E X T  to  M O R S E';

    this.inputMorseClass = 'input-morse';
    this.inputTextClass = 'input-text';
    this.inputClass = this.morseToText ? this.inputMorseClass : this.inputTextClass;

    this.modeLabel = this.morseToText ? this.morseToTextLabel : this.textToMorseLabel;
  }

  translateMorse(morseCode: string) {
    this.morseCode = morseCode;
    this.currTranslation = this.morseToText ? this.translator.translateMorse(morseCode) : this.textTranslator.translateText(morseCode);
  }

  clearInput() {
    this.morseCode = '';
    this.currTranslation = '';
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
    this.morseCode = '';
    this.currTranslation = '';
    this.morseToText = !this.morseToText;
    this.modeLabel = this.morseToText ? this.morseToTextLabel : this.textToMorseLabel;
    this.inputClass = this.morseToText ? this.inputMorseClass : this.inputTextClass;
    this.maxInputChars = this.morseToText ? 50 : 25;
  }

}
