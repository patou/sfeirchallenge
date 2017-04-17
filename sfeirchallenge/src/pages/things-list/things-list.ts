import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CreateEntity } from '../../pages/create-entity/create-entity';
import { HallService } from "../../providers/hall.service";
import { Hall } from '../../providers/hallthings'

@Component({
  selector: 'things-list',
  templateUrl: 'things-list.html'
})
export class ThingsList {
  id: string;
  hall: Hall;
  things: Array<any>;

  constructor(public navCtrl: NavController, private HallService: HallService, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.id = navParams.get('id');
    HallService.getHall(this.id).subscribe(hall => {
      this.hall = hall;
      console.log(hall);
      this.things = JSON.parse(localStorage.getItem('hall-'+hall.type));
    });
  }

  addNew(){
    this.navCtrl.setRoot(CreateEntity);
  }
}
