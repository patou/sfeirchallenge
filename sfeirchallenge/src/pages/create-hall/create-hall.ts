import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HallService } from "../../providers/hall.service";

@Component({
  selector: 'create-hall',
  templateUrl: 'create-hall.html'
})
export class CreateHall {
  templates: Array<{name: string, icon: string}>;

   constructor(public navCtrl: NavController, private HallService: HallService) {
     this.templates = HallService.getHallsAvailable();
   }
}
