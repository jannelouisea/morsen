import { Injectable } from '@angular/core'; // @Injectable is a marker metadata that marks a class as available to Injector for creation
import { TreeNode, MorseTreeService } from './morse-tree.service';
import { morseTranslations } from './morse-code';

@Injectable()
export class MorseCodeTranslatorService {

  morseCodeTree: MorseTreeService;
  longestMorse: number;             // move to other file?

  constructor(morseCodeTree: MorseTreeService) {
    this.morseCodeTree = morseCodeTree;
    this.createMorseCodeTree();
    this.longestMorse = 6;
  }

  createMorseCodeTree() {
    for (const value in morseTranslations) {
      if (morseTranslations.hasOwnProperty(value)) {
        this.morseCodeTree.appendMorseTranslation(morseTranslations[value], value);
      }
    }
  }

  translateMorse(morseCode: string): string {
      // split up the morse code by sections
      let translation = '';
      const morseCodeSections = morseCode.split(' ');

      morseCodeSections.forEach(element => {
        if (element === '') {
          translation += '';
        } else if (!this.validateMorseCode(element)) {
          translation += ' ' + this.morseCodeTree.invalidMorseCode;
        } else {
          translation += ' ' + this.morseCodeTree.findMorseTranslation(element);
        }
      });

      return translation;
  }

  validateMorseCode(morseCode: string): boolean {
    const morsePattern = /[.-]{1,6}/
    return morsePattern.test(morseCode);
  }

}
