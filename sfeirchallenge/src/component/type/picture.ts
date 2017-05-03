import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'picture-type',
  template: `
  <ion-item>
    <ion-label>{{label}}</ion-label>
    <ion-input type="text" [(ngModel)]="value" (change)="valueChange.emit(this.value)"></ion-input>
  </ion-item>
  `
})
export class PictureType {
  @Input()
  label: string;
  @Input()
  value: string;
  @Output() valueChange = new EventEmitter();

  constructor() {

  }
}
