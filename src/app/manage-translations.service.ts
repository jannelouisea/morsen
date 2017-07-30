import { Injectable } from '@angular/core';
import { Translation } from './translation';

@Injectable()
export class ManageTranslationsService {

  maxTranslations: number;
  translations: Translation[];
  ids: number;
  count: number;

  constructor () {
    this.maxTranslations = 10;
    this.translations = [];
    this.ids = 0;
    this.count = 0;
  }

  getTranslations() {
    return this.translations;
  }

  addTranslation(morseCode: string, translation: string) {
    if (this.count !== this.maxTranslations) {
      this.translations.push({id: this.ids, morseCode: morseCode, translation: translation});
      this.ids++;
      this.count++;
    }
  }

  removeTranslation(id: number) {
    let index = 0;
    for (const translation of this.translations) {
      if (translation.id === id) {
        this.translations.splice(index, 1);
        this.count--;
        break;
      }
      index++;
    }
  }

  deleteAllTranslations() {
    this.translations = [];
    this.ids = 0;
    this.ids = 0;
  }
}
