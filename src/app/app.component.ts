import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'MORSEN';
  private maxInputChars = 75;
  private maxSavedTranslations = 20;

  savedTranslations: Translation[] = [{morseCode: '...---...', translation: 'SOS'}]

  morseCode = '';
  translation = '';

  translateMorse(morse: string) {
    this.morseCode = morse;
    this.translation = morse;
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

export class Translation {
  morseCode: string;
  translation: string;
}
