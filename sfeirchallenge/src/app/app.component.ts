import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Hall } from '../providers/hallthings';
import { HallService } from '../providers/hall.service';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { CreateHall } from '../pages/create-hall/create-hall';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}
@Component({
  templateUrl: 'app.html'
})
export class HallThingsApp {
  @ViewChild(Nav) nav: Nav;
  loggedInPages: PageInterface[] = [
    { title: 'Mon compte', component: AccountPage, icon: 'person' },
    { title: 'Deconnexion', component: LoginPage, icon: 'log-out', logsOut: true },
    { title: 'Parametres', component: SettingsPage, icon: 'settings' }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Connexion', component: LoginPage, icon: 'log-in' },
    { title: 'Inscription', component: SignupPage, icon: 'person-add' }
  ];
  rootPage: any;

  things : Array<Hall> = [];
  html = `<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>Titi</ion-card-content>
  </ion-card>`;
  values = {name: 'toto', artist: 'titi'};

  constructor(public platform: Platform, private menu: MenuController,public events: Events, public userData: UserData, private HallService: HallService) {
    localStorage.getItem("alreadyVisited" + localStorage.getItem("alreadyVisited"));
    if(localStorage.getItem("alreadyVisited") === "true") {
      this.rootPage = HallList;
      this.userData.hasLoggedIn().then((hasLoggedIn) => {
        this.enableMenu(hasLoggedIn === true);
        if(hasLoggedIn){
          this.rootPage = HallList;
        }
        else{
          this.rootPage = LoginPage;
        }
      });
    } else {
      this.enableMenu(false);
      this.rootPage = Swiper;
    }

    this.initializeApp();
    this.listenToLoginEvents();

    // used for an example of ngFor and navigation
    HallService.getHalls().subscribe(list => this.things = list);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  listenToLoginEvents() {
  this.events.subscribe('user:login', () => {
    this.enableMenu(true);
    this.nav.setRoot(HallList);
  });

  this.events.subscribe('user:signup', () => {
    this.enableMenu(true);
    this.nav.setRoot(HallList);
  });

  this.events.subscribe('user:logout', () => {
    this.enableMenu(false);
  });
}

enableMenu(loggedIn: boolean) {
  this.menu.enable(loggedIn, 'loggedInMenu');
  this.menu.enable(!loggedIn, 'loggedOutMenu');
}

  openHall(hall) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(ThingsList, {id: hall.$key});
  }

  openPage(page: PageInterface) {

    this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
    });

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.userData.logout();
        this.nav.setRoot(LoginPage);
      }, 100);
    }
  }

  isActive(page: PageInterface) {

    // Tabs are a special case because they have their own navigation
    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return;
  }

  openHallList() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HallList);
  }

  openCreateHall() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(CreateHall);
  }
}
