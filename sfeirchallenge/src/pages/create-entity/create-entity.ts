import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { HallList } from '../hall-list/hall-list';
import { HallService } from "../../providers/hall.service";
import { ThingsService } from "../../providers/things.service";
import { UserData } from "../../providers/user-data";
import { Hall, Thing } from "../../providers/hallthings";

@Component({
  selector: 'create-entity',
  templateUrl: 'create-entity.html'
})
export class CreateEntity {
  hall: Hall;
  uid: string;
  hallId: string;
  values = {};

  constructor(public nav: NavController, public navParams: NavParams, private toastCtrl: ToastController, private HallService: HallService, private ThingsService: ThingsService, private UserData: UserData) {
    this.hallId = navParams.get('id');
    HallService.getHall(this.hallId).subscribe(hall => {
      this.hall = hall;
      console.log(hall);
    });
    UserData.getUid().then(uid => this.uid = uid);

  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
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
        //this.image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  save() {
    let thing : Thing = {
      created: new Date(),
      by: this.uid,
      values: this.values
    };
    this.ThingsService.create(this.hallId, thing).then(() => {
        this.presentToast("Yes, ton objet a été renseigné avec succès.");
    });
  }
}
