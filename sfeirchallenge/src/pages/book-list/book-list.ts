import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CreateEntity } from '../../pages/create-entity/create-entity';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.html'
})
export class BookList {
  selectedItem: any;
  icons: string[];
  things: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.things = JSON.parse(localStorage.getItem('hall-book'));
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BookList, {
      item: item
    });
  }

  addNew(){
    this.navCtrl.setRoot(CreateEntity);
  }
}
