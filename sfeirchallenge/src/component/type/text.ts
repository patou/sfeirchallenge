import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-type',
  template: `
  <ion-item>
    <ion-label floating>{{label}}</ion-label>
    <ion-input type="text" [(ngModel)]="value" (change)="valueChange.emit(this.value)"></ion-input>
  </ion-item>
  `
})
export class TextType {
  @Input()
  label: string;
  @Input()
  value: string;
  @Output() valueChange = new EventEmitter();

  constructor() {

  }
}
