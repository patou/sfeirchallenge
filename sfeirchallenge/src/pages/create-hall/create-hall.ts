import {UpdateHall} from "../update-hall/update-hall";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HallService } from "../../providers/hall.service";
import { UserData } from "../../providers/user-data";
import { Hall, Model } from "../../providers/hallthings";

@Component({
  selector: 'create-hall',
  templateUrl: 'create-hall.html'
})
export class CreateHall {
  templates: Array<Model>;
  name: string;
  icon: string;
  color: string;
  uid: string;

   constructor(public navCtrl: NavController, private HallService: HallService, private UserData: UserData) {
     this.templates = HallService.getHallsAvailable();
     UserData.getUid().then(uid => this.uid = uid);
   }

   createHall(template:Hall) {
     if (this.name) {
       let hall:Hall = {name : this.name, icon: this.icon || template.icon, type: template.type, color : this.color || template.color, html: template.html, properties: template.properties, count: 0, owner: this.uid };
       this.HallService.create(hall).then((item) => this.navCtrl.setRoot(UpdateHall, {hallId:item.key}));
     }
   }
}
