import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-type',
  template: `
  <ion-item>
    <ion-label>{{label}}</ion-label>
    <div item-content>
      <ion-icon *ngFor="let rate of [1,2,3,4,5]" [name]="rate <= value ? 'star' : 'star-outline'" (click)="selectStar(rate)"></ion-icon>
    </div>
  </ion-item>
  `
})
export class StarType {
  @Input()
  label: string;
  @Input()
  value: number;
  @Output() valueChange = new EventEmitter();

  constructor() {

  }

  selectStar(rate: number) {
    this.value = rate;
    this.valueChange.emit(rate);
  }
}
