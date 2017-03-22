import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { MusicList } from '../pages/music-list/music-list';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  menu: MenuController;

  pages: Array<{name: string, component: any, icon: string}>;

  constructor(public platform: Platform, menu: MenuController) {
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { name: 'Accueil', component: Page1, icon: 'apps' },
      { name: 'Mes Livres', component: MusicList, icon: 'book' },
      { name: 'Mes DVD', component: MusicList, icon: 'disc' },
      { name: 'Ma liste de course', component: MusicList, icon: 'cart' },
      { name: 'Mes jeux', component: MusicList, icon: 'logo-playstation' },
      { name: 'Ma musique', component: MusicList, icon: 'musical-notes' },
      { name: 'Mes voyages', component: MusicList, icon: 'jet' },
      { name: 'Mes vins', component: MusicList, icon: 'wine' }
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
