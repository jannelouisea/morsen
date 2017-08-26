import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Translation } from '../translation';

@Component({
  // Add a prefix to this component?
  selector: 'app-saved-translation',
  templateUrl: './saved-translation.component.html',
  styleUrls: ['./saved-translation.component.css']
})
export class SavedTranslationComponent implements OnInit {

  @Input() translation: Translation;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  removeTranslation() {
    this.change.emit(this.translation.id);
  }

}
