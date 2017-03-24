import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { MusicList } from '../pages/music-list/music-list';
import { BookList } from '../pages/book-list/book-list';
import { CartList } from '../pages/cart-list/cart-list';
import { GameList } from '../pages/game-list/game-list';
import { TravelList } from '../pages/travel-list/travel-list';
import { VideoList } from '../pages/video-list/video-list';
import { WineList } from '../pages/wine-list/wine-list';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  menu: MenuController;

  pages: Array<{name: string, component: any, icon: string, type: string}>;

  constructor(public platform: Platform, menu: MenuController) {

    localStorage.getItem("alreadyVisited" + localStorage.getItem("alreadyVisited"));
    if(localStorage.getItem("alreadyVisited") === "true") {
      this.rootPage = HallList;
    }else {
      this.rootPage = Swiper;
    }
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { name: 'Mes Things', component: HallList, icon: 'apps', type: 'things'},
      { name: 'Mes Livres', component: BookList, icon: 'book', type: 'book'},
      { name: 'Mes DVD', component: VideoList, icon: 'disc', type: 'video' },
      { name: 'Ma liste de course', component: CartList, icon: 'cart', type:'cart' },
      { name: 'Mes jeux', component: GameList, icon: 'logo-playstation', type:'game' },
      { name: 'Ma musique', component: MusicList, icon: 'musical-notes', type: 'music' },
      { name: 'Mes voyages', component: TravelList, icon: 'jet', type: 'travel' },
      { name: 'Mes vins', component: WineList, icon: 'wine', type: 'wine' }
    ];

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
    this.nav.setRoot(page.component);
  }

  openSettings() {
    this.nav.setRoot(SettingsPage)
  }
}
