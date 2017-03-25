import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
      };
      console.log(object);
      let objects = [];
      let fromDB = localStorage.getItem(String(this.type));
      if(fromDB) {
        objects =  JSON.parse(fromDB);
      }
      objects.push(object);
      localStorage.setItem(String(this.type), JSON.stringify(objects));

      this.nav.setRoot(HallList);
    });

    toast.present();
  }

  save() {
    this.presentToast("Yes, ton objet a été renseigné avec succès.");
  }
}
