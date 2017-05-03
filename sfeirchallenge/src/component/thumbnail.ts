import { FirebaseApp } from 'angularfire2';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { Component, Input, Inject, NgModule } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'picture-thumbnail',
  template: `
  <ion-thumbnail>
      <img [src]="imageSrc"></img>
  </ion-thumbnail>
  `
})
export class PictureThumbnail {
  imageSrc: string = '';

  constructor(@Inject(FirebaseApp) private firebaseApp: firebase.app.App) {

  }

  @Input()
  set image(value) {
    this.loadImage(value);
  }

  loadImage(imageGuid) {
    if (imageGuid) {
      this.firebaseApp.storage().ref()
        .child(imageGuid)
        .getDownloadURL().then((url) => {
          this.imageSrc = url;
        });
    }
  }
}
@NgModule({imports:[CommonModule, IonicModule],declarations: [PictureThumbnail], exports: [PictureThumbnail] })
export class PictureThumbnailModule { }
