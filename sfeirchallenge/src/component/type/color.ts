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
  colors = ["#ddd", "#2ecc71", "#9b59b6", "#3498db", "#95a5a6", "#f1c40f", "#1a237e", "#b71c1c", "#880e4f", "#4a148c",
   "#311b92", "#0d47a1", "#01579b", "#006064", "#004d40", "#1b5e20", "#33691e", "#827717", "#f57f17", "#ff6f00", "#e65100", "#bf360c", "#3e2723", "#212121", "#d50000", "#c51162", "#aa00ff", "#6200ea", "#304ffe", "#2962ff",
   "#0091ea", "#00b8d4", "#00bfa5", "#00c853", "#64dd17", "#aeea00", "#ffd600", "#ffab00", "#ff6d00", "#dd2c00"];
  constructor(public viewCtrl: ViewController) {

  }

  selectColor(color) {
    this.viewCtrl.dismiss(color);
  }
}
