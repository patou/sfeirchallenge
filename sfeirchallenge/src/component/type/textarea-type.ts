import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'textarea-type',
  template: `
  <ion-item>
    <ion-label floating>{{label}}</ion-label>
    <ion-textarea [(ngModel)]="value" (change)="valueChange.emit(this.value)"></ion-textarea>
  </ion-item>
  `
})
export class TextAreaType {
  @Input()
  label: string;
  @Input()
  value: string;
  @Output() valueChange = new EventEmitter();

  constructor() {

  }
}
