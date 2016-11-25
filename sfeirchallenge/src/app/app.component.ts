import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SettingsPage } from '../pages/settings/settings'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{name: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { name: 'Mes Livres', component: Page2, icon: 'book' },
      { name: 'Mes DVD', component: Page2, icon: 'disc' },
      { name: 'Ma liste de course', component: Page2, icon: 'cart' },
      { name: 'Mes jeux', component: Page2, icon: 'logo-playstation' },
      { name: 'Ma musique', component: Page2, icon: 'musical-notes' },
      { name: 'Mes voyages', component: Page2, icon: 'jet' },
      { name: 'Mes vins', component: Page2, icon: 'wine' }
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
