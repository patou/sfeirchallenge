import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { HallList } from '../hall-list/hall-list';
import { HallService } from "../../providers/hall.service";
import { Hall } from "../../providers/hallthings";

@Component({
  selector: 'create-entity',
  templateUrl: 'create-entity.html'
})
export class CreateEntity {
  types: Array<Hall>;
  name: String;
  desc: String;
  type: String;
  date : Date;
  author : String;
  image : any;

  constructor(public nav: NavController, private toastCtrl: ToastController, private HallService: HallService) {
    HallService.getHalls().subscribe(list => this.types = list);
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
