import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HallList } from '../hall-list/hall-list';
import { HallService } from "../../providers/hall.service";
import { ThingsService } from "../../providers/things.service";
import { UserData } from "../../providers/user-data";
import { Hall, Thing, Model} from "../../providers/hallthings";

@Component({
  selector: 'update-thing',
  templateUrl: 'update-thing.html'
})
export class UpdateThing {
  hall: Hall;
  uid: string;
  hallId: string;
  thingId: string;
  thing: Thing;
  model: Model;

  constructor(public nav: NavController, public navParams: NavParams, private toastCtrl: ToastController, private HallService: HallService, private ThingsService: ThingsService, private UserData: UserData) {

    this.thingId = navParams.get('thingId');
    this.hallId = navParams.get('hallId');

    HallService.getHall(this.hallId).subscribe(hall => {
      this.hall = hall;
      console.log(hall);
    });
    if (this.thingId) {
      ThingsService.getThing(this.hallId, this.thingId).subscribe(thing => {
        this.thing = thing;
      });
    }
    else {
      this.thing = {
        created: new Date(),
        by: this.uid,
        values: {}
      };
    }
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

  save() {
    this.thing.by = this.uid;
    if (this.thingId) {
      this.ThingsService.update(this.hallId, this.thing, this.thingId).then(() => {
          this.presentToast("Yes, ton objet a été mise à jour avec succès.");
          this.nav.pop();
      });
    }
    else {
      console.log("Sauvegarde de l'élement : " + this.thing.values);
      this.ThingsService.create(this.hallId, this.thing).then(() => {
          this.presentToast("Yes, ton objet a été renseigné avec succès.");
          this.nav.pop();
      });
    }
  }

  addNewProperties() {

  }
}
