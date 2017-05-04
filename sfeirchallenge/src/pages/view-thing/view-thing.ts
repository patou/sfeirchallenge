import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HallService } from "../../providers/hall.service";
import { ThingsService } from "../../providers/things.service";
import { UserData } from "../../providers/user-data";
import { UpdateThing } from '../../pages/update-thing/update-thing';
import { Hall, Thing, Model } from "../../providers/hallthings";

@Component({
  selector: 'view-thing',
  templateUrl: 'view-thing.html'
})
export class ViewThing {
  thing: Thing;
  thingId: string;
  hallId: string;
  hall: Hall;
  values = {};
  model: Model;

  constructor(public nav: NavController, public navParams: NavParams, private toastCtrl: ToastController, private alertCtrl: AlertController, private HallService: HallService, private ThingsService: ThingsService, private UserData: UserData) {
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
  }

  update() {
    this.nav.push(UpdateThing, {hallId: this.hallId, thingId: this.thingId});
  }

  delete() {
    this.alertCtrl.create({
    title: 'Suppression',
    message: 'Voulez-vous vraiment supprimer ce thing ?',
    buttons: [
      {
        text: 'non',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Oui',
        handler: () => {
          this.hall.properties = [];
          this.thing = undefined;
          this.ThingsService.delete(this.hallId, this.thingId).then(() => {
              console.log("Success delete");
              this.nav.pop();
          });
        }
      }
    ]
  }).present();
  }
}
