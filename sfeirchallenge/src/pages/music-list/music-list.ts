import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CreateEntity } from '../../pages/create-entity/create-entity';

@Component({
  selector: 'music-list',
  templateUrl: 'music-list.html'
})
export class MusicList {
  selectedItem: any;
  icons: string[];
  things: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.things = JSON.parse(localStorage.getItem('music'));
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MusicList, {
      item: item
    });
  }

  addNew(){
    this.navCtrl.setRoot(CreateEntity);
  }
}
