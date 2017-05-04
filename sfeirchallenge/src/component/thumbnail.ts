import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { Component, Input, NgModule } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'picture-thumbnail',
  template: `
  <ion-thumbnail *ngIf="hasImage">
      <img [src]="imageSrc"/>
  </ion-thumbnail>
  `
})
export class PictureThumbnail {
  imageSrc: string = '';
  hasImage = false;

  constructor() {

  }

  @Input()
  set image(value) {
    if (value) {
      this.hasImage = true;
      this.loadImage(value);
    }
    else {
      this.hasImage = false;
      this.imageSrc = '';
    }
  }

  loadImage(imageGuid) {
    if (imageGuid) {
      firebase.storage().ref()
        .child(imageGuid)
        .getDownloadURL().then((url) => {
          this.imageSrc = url;
        });
    }
  }
}
@NgModule({imports:[CommonModule, IonicModule],declarations: [PictureThumbnail], exports: [PictureThumbnail] })
export class PictureThumbnailModule { }
