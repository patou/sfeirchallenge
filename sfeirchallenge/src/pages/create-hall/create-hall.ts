import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HallService } from "../../providers/hall.service";
import { UserData } from "../../providers/user-data";
import { Hall } from "../../providers/hallthings";

@Component({
  selector: 'create-hall',
  templateUrl: 'create-hall.html'
})
export class CreateHall {
  templates: Array<{name: string, icon: string}>;
  name: string;
  icon: string;
  uid: string;

   constructor(public navCtrl: NavController, private HallService: HallService, private UserData: UserData) {
     this.templates = HallService.getHallsAvailable();
     UserData.getUid().then(uid => this.uid = uid);
   }

   createHall(template:Hall) {
     if (this.name) {
       let hall:Hall = {name : this.name, icon: this.icon || template.icon, type: template.type, color : template.color, count: 0, owner: [this.uid], shared:[this.uid] };
       this.HallService.create(hall);
     }
   }
}
