import { Injectable } from '@angular/core';

export class TreeNode {
  value: string;
  left: TreeNode;
  right: TreeNode;

  constructor (value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  hasLeft () {
    return !(this.left === null);
  }

  hasRight () {
    return !(this.right === null);
  }
}

@Injectable()
export class MorseTreeService {
  root: TreeNode;
  dot: string;
  dash: string;
  invalidMorseCode: string;

  constructor () {
    this.root = new TreeNode('');
    this.dot = '.';
    this.dash = '-';
    this.invalidMorseCode = '#';
  }

  appendMorseTranslation (morseCode: string, value: string) {
    let current;

    if (this.root === null) {
      this.root = new TreeNode('');
    }

    current = this.root;

    for (const char of morseCode) {
      if (char === this.dot) {
        if (current.hasLeft()) {
          current = current.left;
        } else {
          current = current.left = new TreeNode('');
        }
      } else if (char === this.dash) {
        if (current.hasRight()) {
          current = current.right;
        } else {
          current = current.right = new TreeNode('');
        }
      }
    }

    current.value = value;
  }

  findMorseTranslation (morseCode: string): string {
    let current;

    if (morseCode === '') {
      return '';
    }

    if (this.root === null) {
      return this.invalidMorseCode;
    } else {
      current = this.root;

      for (const char of morseCode) {
        if (char === this.dot) {
          if (current.hasLeft()) {
            current = current.left;
          } else {
            return this.invalidMorseCode;
          }
        } else if (char === this.dash) {
          if (current.hasRight()) {
            current = current.right;
          } else {
            return this.invalidMorseCode;
          }
        } else {
          return this.invalidMorseCode;
        }
      }

      if (current.value !== '') {
        return current.value;
      } else {
        return this.invalidMorseCode;
      }
    }
  }

}
