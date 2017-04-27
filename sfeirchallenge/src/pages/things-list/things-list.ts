import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CreateEntity } from '../../pages/create-entity/create-entity';
import { ViewEntity } from '../../pages/view-entity/view-entity';
import { HallService } from "../../providers/hall.service";
import { ThingsService } from "../../providers/things.service";
import { Hall, Model } from '../../providers/hallthings'

@Component({
  selector: 'things-list',
  templateUrl: 'things-list.html'
})
export class ThingsList {
  id: string;
  hall: Hall;
  things: Array<any>;
  model: Model;

  constructor(public navCtrl: NavController, public navParams: NavParams, private HallService: HallService, private ThingsService: ThingsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.id = navParams.get('id');

    HallService.getHall(this.id).subscribe(hall => {
      this.hall = hall;
      this.model = HallService.getModel(hall.type);
      console.log(hall);
    });
    ThingsService.getThings(this.id).subscribe(things => {
      this.things = things;
      console.log(this.things);
    });

  }

  addNew(){
    this.navCtrl.setRoot(CreateEntity, {id: this.id});
  }

  open(hallId, thingId) {
    this.navCtrl.push(ViewEntity, {hallId: hallId, thingId: thingId});
  }
}
