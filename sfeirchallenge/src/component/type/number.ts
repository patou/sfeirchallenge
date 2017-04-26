import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'number-type',
  template: `
  <ion-item>
    <ion-label floating>{{label}}</ion-label>
    <ion-input type="number" [(ngModel)]="value" (change)="valueChange.emit(this.value)"></ion-input>
  </ion-item>
  `
})
export class NumberType {
  @Input()
  label: string;
  @Input()
  value: string;
  @Output() valueChange = new EventEmitter();

  constructor() {

  }
}
