import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Hall } from '../providers/hallthings';
import { HallService } from '../providers/hall.service';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  menu: MenuController;

  things : Array<Hall> = [];

  constructor(public platform: Platform, menu: MenuController, private HallService: HallService) {

    localStorage.getItem("alreadyVisited" + localStorage.getItem("alreadyVisited"));
    if(localStorage.getItem("alreadyVisited") === "true") {
      this.rootPage = HallList;
    }else {
      this.rootPage = Swiper;
    }
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.things = HallService.getHalls();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(ThingsList, {type: page.type});
  }

  openHallList() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HallList);
  }

  openSettings() {
    this.nav.setRoot(SettingsPage)
  }
}
