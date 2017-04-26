import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'datetime-type',
  template: `
  <ion-item>
    <ion-label>{{label}}</ion-label>
    <ion-datetime displayFormat={{format}} [(ngModel)]="value" (change)="valueChange.emit(this.value)"></ion-datetime>
  </ion-item>
  `
})
export class DateTimeType {
  @Input()
  label: string;
  @Input()
  value: string;
  @Input()
  format: string;
  @Output() valueChange = new EventEmitter();

  constructor() {

  }
}
