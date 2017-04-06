import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CreateEntity } from '../../pages/create-entity/create-entity';

@Component({
  selector: 'things-list',
  templateUrl: 'things-list.html'
})
export class ThingsList {
  type: String;
  things: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.type = navParams.get('type');
    this.things = JSON.parse(localStorage.getItem('hall-'+this.type));
  }

  addNew(){
    this.navCtrl.setRoot(CreateEntity);
  }
}
