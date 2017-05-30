import { FirebaseApp } from 'angularfire2';
import { Component, Input, Inject } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'picture-display',
  template: `<img [src]="imageSrc" class="picture-display"/>`
})
export class PictureDisplay {
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
        }, (error) => {
            console.log(error);
            this.imageSrc = undefined;
          });
    }
  }
}
