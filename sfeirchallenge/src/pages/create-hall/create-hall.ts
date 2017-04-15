import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HallService } from "../../providers/hall.service";
import { Hall } from "../../providers/hallthings";

@Component({
  selector: 'create-hall',
  templateUrl: 'create-hall.html'
})
export class CreateHall {
  templates: Array<{name: string, icon: string}>;
  name: string;
  icon: string;

   constructor(public navCtrl: NavController, private HallService: HallService) {
     this.templates = HallService.getHallsAvailable();
   }

   createHall(template:Hall) {
     if (this.name) {
       let hall:Hall = {name : this.name, icon: this.icon || template.icon, type: template.type, color : template.color };
       this.HallService.create(hall);
     }
   }
}
