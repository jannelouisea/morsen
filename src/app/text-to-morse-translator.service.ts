import { Injectable } from '@angular/core';
import { morseTranslations } from './morse-code';

@Injectable()
export class TextToMorseTranslatorService {

  translateText(inputText: string): string {
    let translation = '';
    const words = inputText.split(' ');

    words.forEach(word => {
      if (word === '') {
        translation += '';
      } else if (!this.validateWord(word)) {
        translation += ' #';
      } else {
        for (let char of word) {
          if (/[a-zA-Z]/.test(char)) {
            char = char.toUpperCase();
          }
          translation += ' ' + morseTranslations[char];
        }
      }
    });

    return translation;
  }

  validateWord(inputText: string): boolean {
    const textPattern = /[\w.,?!\/@()]/
    return textPattern.test(inputText);
  }

}
