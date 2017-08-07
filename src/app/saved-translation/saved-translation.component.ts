import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Translation } from '../translation';

@Component({
  selector: 'app-saved-translation',
  templateUrl: './saved-translation.component.html',
  styleUrls: ['./saved-translation.component.css']
})
export class SavedTranslationComponent implements OnInit {

  @Input() translation: Translation;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeTranslation() {
    console.log('Remove function is called in child component.');
    this.change.emit(this.translation.id);
  }

}
