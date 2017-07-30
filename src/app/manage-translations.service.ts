import { Injectable } from '@angular/core';
import { Translation } from './translation';

@Injectable()
export class ManageTranslationsService {

  translations: Translation[];
  count: number;

  constructor () {
    this.translations = [];
    this.count = 0;
  }

  getTranslations() {
    return this.translations;
  }

  addTranslation(morseCode: string, translation: string) {
    this.translations.push({id: this.count, morseCode: morseCode, translation: translation});
    this.count++;
  }

  removeTranslation() {
    //
  }

  deleteAllTranslations() {
    this.translations = [];
    this.count = 0;
  }
}
