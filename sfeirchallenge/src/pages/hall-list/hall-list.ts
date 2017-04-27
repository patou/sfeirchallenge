import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ThingsList } from '../things-list/things-list';

import { Hall } from '../../providers/hallthings'
import { HallService } from '../../providers/hall.service'

@Component({
  selector: 'page-hall-list',
  templateUrl: 'hall-list.html'
})
export class HallList {
  selectedItem: any;

  things : Array<Hall> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private HallService: HallService) {
    HallService.getHalls().subscribe(list => this.things = list);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(ThingsList, {hallId: page.$key});
  }
}
