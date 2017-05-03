import { FirebaseApp } from 'angularfire2';
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'picture-type',
  template: `
  <ion-item>
    <ion-label>{{label}}</ion-label>
    <div item-content>
    <label class="uploader" ondragover="return false;"
      [class.loaded]="loaded"
      [style.outlineColor]="dragging ? activeColor : baseColor"
      (dragenter)="handleDragEnter()"
      (dragleave)="handleDragLeave()"
      (drop)="handleDrop($event)">

      <i class="icon ion-md ion-md-cloud-upload" [class.blink]="uploading"
          [style.color]="dragging
              ? ((imageSrc.length > 0) ? overlayColor : activeColor)
              : ((imageSrc.length > 0) ? overlayColor : baseColor)" [hidden]="uploaded"></i>

      <img
          [src]="imageSrc"
          (load)="handleImageLoad()"
          [class.loaded]="imageLoaded"/>

      <input type="file" name="file" accept="image/*"
          (change)="handleInputChange($event)">
    </label>
    </div>
  </ion-item>
  `
})
export class PictureType {
  @Input()
  label: string;
  @Output() valueChange = new EventEmitter();
  image: string;
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  iconColor: string;
  borderColor: string;

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  uploaded = false;
  uploading = false;
  imageSrc: string = '';
  imageGuid:string;

  constructor(@Inject(FirebaseApp) private firebaseApp: firebase.app.App) {

  }

  @Input()
  set value(value) {
    this.imageGuid = value;
    this.loadImage(value);
  }

  loadImage(imageGuid) {
    if (imageGuid) {
      this.uploading = true;
      this.firebaseApp.storage().ref()
        .child(imageGuid)
        .getDownloadURL().then((url) => {
          this.loaded = false;
          this.uploaded = true;
          this.imageSrc = url;
          this.uploading = false;
        });
    }
  }

  handleDragEnter() {
      this.dragging = true;
  }

  handleDragLeave() {
      this.dragging = false;
  }

  handleDrop(e) {
      e.preventDefault();
      this.dragging = false;
      this.handleInputChange(e);
  }

  handleImageLoad() {
      this.imageLoaded = true;
      this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
      var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

      var pattern = /image-*/;
      var reader = new FileReader();

      if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
      }

      this.uploadFile(file);

      this.loaded = false;

      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
  }

  uploadFile(file) {
      let storageRef = this.firebaseApp.storage().ref();
      if (this.uploaded) {
        storageRef.child(this.imageGuid).delete().then(() => {
        }).catch((error) => {
          console.log(error);
        });
        this.uploaded = false;
      }
      this.imageGuid = 'images/'+this.guid();
      this.uploading = true;
      storageRef.child(this.imageGuid)
      .put(file).then((snapshot) => {
        this.valueChange.emit(this.imageGuid);
        this.uploaded = true;
        this.uploading = false;
      }).catch((error) => {
          console.log(error);
          this.uploaded = false;
          this.uploading = false;
        });
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  _handleReaderLoaded(e) {
      var reader = e.target;
      this.imageSrc = reader.result;
      this.loaded = true;
  }

  _setActive() {
      this.borderColor = this.activeColor;
      if (this.imageSrc.length === 0) {
          this.iconColor = this.activeColor;
      }
  }

  _setInactive() {
      this.borderColor = this.baseColor;
      if (this.imageSrc.length === 0) {
          this.iconColor = this.baseColor;
      }
  }
}
