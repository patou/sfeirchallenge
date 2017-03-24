import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CreateEntity } from '../../pages/create-entity/create-entity';

@Component({
  selector: 'video-list',
  templateUrl: 'video-list.html'
})
export class VideoList {
  selectedItem: any;
  icons: string[];
  items: Array<{titre: string, year: number, picture: string, author: string, album: string, note: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = JSON.parse(localStorage.getItem('video'));
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(VideoList, {
      item: item
    });
  }

  addNew(){
    this.navCtrl.setRoot(CreateEntity);
  }
}
