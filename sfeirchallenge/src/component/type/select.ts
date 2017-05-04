import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-type',
  template: `
  <ion-item>
    <ion-label floating>{{label}}</ion-label>
    <ion-select type="text" [(ngModel)]="value" (ngModelChange)="valueChange.emit(this.value)">
      <ion-option *ngFor="let option of this.options">{{option}}</ion-option>
    </ion-select>
  </ion-item>
  `
})
export class SelectType {
  @Input()
  label: string;
  @Input()
  value: string;
  options: string[];
  @Output() valueChange = new EventEmitter();

  constructor() {

  }

  @Input()
  set values(value:string) {
    this.options = value ? value.split(",") : [];
  }
}
