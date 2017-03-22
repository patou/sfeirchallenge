import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { MusicList } from '../../pages/music-list/music-list';

@Component({
  selector: 'create-entity',
  templateUrl: 'create-entity.html'
})
export class CreateEntity {
  types: Array<{name: string, icon: string}>;
  name: String;
  desc: String;
  type: String;
  date : Date;
  author : String;

  constructor(public nav: NavController, private toastCtrl: ToastController) {

    this.types = [
      { name: 'Livres', icon: 'book' },
      { name: 'DVD', icon: 'disc' },
      { name: 'Liste de course', icon: 'cart' },
      { name: 'Jeux', icon: 'logo-playstation' },
      { name: 'Musique', icon: 'musical-notes' },
      { name: 'Voyages', icon: 'jet' },
      { name: 'Vins', icon: 'wine' }
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

      this.nav.setRoot(MusicList);
    });

    toast.present();
  }

  save() {
    this.presentToast("Yes, ton stuff a été renseigné avec succès.");
  }
}
