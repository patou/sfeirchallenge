import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HallList } from '../hall-list/hall-list';
import { HallService } from "../../providers/hall.service";
import { ThingsService } from "../../providers/things.service";
import { UserData } from "../../providers/user-data";
import { Hall, Thing, Model} from "../../providers/hallthings";

@Component({
  selector: 'view-entity',
  templateUrl: 'view-entity.html'
})
export class ViewEntity {
  thing: Thing;
  uid: string;
  thingId: string;
  hallId: string;
  hall: Hall;
  values = {};
  model: Model;

  constructor(public nav: NavController, public navParams: NavParams, private toastCtrl: ToastController, private HallService: HallService, private ThingsService: ThingsService, private UserData: UserData) {
    this.thingId = navParams.get('thingId');
    this.hallId = navParams.get('hallId');

    HallService.getHall(this.hallId).subscribe(hall => {
      this.hall = hall;
      this.model = HallService.getModel(hall.type);
      console.log(hall);
    });
    ThingsService.getThing(this.hallId, this.thingId).subscribe(thing => {
      this.thing = thing;
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

  update() {
    this.ThingsService.update(this.hallId, this.thing, this.thingId).then(() => {
        this.presentToast("Yes, ton objet a été mise à jour avec succès.");
    });
  }
}
