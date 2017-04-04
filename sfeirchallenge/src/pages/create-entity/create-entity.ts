import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { HallList } from '../../pages/hall-list/hall-list';

@Component({
  selector: 'create-entity',
  templateUrl: 'create-entity.html'
})
export class CreateEntity {
  types: Array<{name: string, icon: string, type: string}>;
  name: String;
  desc: String;
  type: String;
  date : Date;
  author : String;
  image : any;

  constructor(public nav: NavController, private toastCtrl: ToastController) {

    this.types = [
      { name: 'Livres', icon: 'book', type: 'book' },
      { name: 'DVD', icon: 'disc', type: 'video' },
      { name: 'Liste de course', icon: 'cart', type: 'cart'},
      { name: 'Jeux', icon: 'logo-playstation', type: 'game' },
      { name: 'Musique', icon: 'musical-notes', type: 'music' },
      { name: 'Voyages', icon: 'jet', type: 'travel' },
      { name: 'Vins', icon: 'wine', type: 'wine' }
    ];
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      let object = {
        name : this.name,
        desc : this.desc,
        type : this.type,
        date : this.date,
        author : this.author,
        image : this.image
      };
      console.log(object);
      let objects = [];
      let fromDB = localStorage.getItem('hall-'+this.type);
      if(fromDB) {
        objects =  JSON.parse(fromDB);
      }
      objects.push(object);
      localStorage.setItem('hall-'+this.type, JSON.stringify(objects));

      this.nav.setRoot(HallList);
    });

    toast.present();
  }

  takePicture(name){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  save() {
    this.presentToast("Yes, ton objet a été renseigné avec succès.");
  }
}
