import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { UpdateThing } from '../../pages/update-thing/update-thing';
import { ViewThing } from '../../pages/view-thing/view-thing';
import { HallService } from "../../providers/hall.service";
import { ThingsService } from "../../providers/things.service";
import { Hall, Model } from '../../providers/hallthings'

@Component({
  selector: 'things-list',
  templateUrl: 'things-list.html'
})
export class ThingsList {
  hallId: string;
  hall: Hall;
  things: Array<any>;
  model: Model;

  constructor(public navCtrl: NavController, public navParams: NavParams, private HallService: HallService, private ThingsService: ThingsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.hallId = navParams.get('hallId');

    HallService.getHall(this.hallId).subscribe(hall => {
      this.hall = hall;
      this.model = HallService.getModel(hall.type);
      console.log(hall);
    });
    ThingsService.getThings(this.hallId).subscribe(things => {
      this.things = things;
      console.log(this.things);
    });

  }

  addNew(){
    this.navCtrl.push(UpdateThing, {hallId: this.hallId});
  }

  open(thingId) {
    this.navCtrl.push(ViewThing, {hallId: this.hallId, thingId: thingId});
  }
}
