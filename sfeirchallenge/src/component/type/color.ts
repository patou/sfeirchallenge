import { Component, Input, Output, EventEmitter, ElementRef,  } from '@angular/core';
import { ViewController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'color-type',
  template: `
  <ion-item (click)="openColorSelector($event)">
    <ion-label>{{label}}</ion-label>
    <div class="colorbox" item-right [style.backgroundColor]="value" (click)="openColorSelector($event)"></div>
  </ion-item>
  `
})
export class ColorType {
  @Input()
  label: string;
  @Input()
  value: string;
  @Output() valueChange = new EventEmitter();

  constructor(private popoverCtrl: PopoverController) {
    this.value = '#fff';
  }

  openColorSelector(event) {
    event.stopPropagation();
    let popover = this.popoverCtrl.create(ColorTypePopover);
    popover.present({
      ev: event
    });
    popover.onDidDismiss((icon) => {
      this.value = icon;
      this.valueChange.emit(icon);
    });
  }
}
@Component({
  template: `
  <ion-row>
    <ion-col *ngFor="let color of colors"><div class="colorbox" [style.backgroundColor]="color" (click)="selectColor(color)"></div></ion-col>
  </ion-row>
  `
})
export class ColorTypePopover {
  colors = ["#ddd", "#2ecc71", "#9b59b6", "#3498db", "#95a5a6", "#f1c40f", "#8e44ad"];
  constructor(public viewCtrl: ViewController) {

  }

  selectColor(color) {
    this.viewCtrl.dismiss(color);
  }
}
