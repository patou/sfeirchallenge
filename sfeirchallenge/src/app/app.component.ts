import { TranslateService } from "ng2-translate";
import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform, MenuController } from 'ionic-angular';

import { Hall } from '../providers/hallthings';
import { HallService } from '../providers/hall.service';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { CreateHall } from '../pages/create-hall/create-hall';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UserData } from '../providers/user-data';
import { Splashscreen } from '@ionic-native/splashscreen';

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
    { title: 'Deconnexion', component: LoginPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Connexion', component: LoginPage, icon: 'log-in' },
    { title: 'Inscription', component: SignupPage, icon: 'person-add' }
  ];
  rootPage: any;

  things : Array<Hall> = [];
  html = `<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>Titi {{values.count}}</ion-card-content>
  </ion-card>`;
  values = {name: 'toto', artist: 'titi', count: 0};

  constructor(public platform: Platform, private menu: MenuController, translate: TranslateService, public events: Events, public userData: UserData, private HallService: HallService) {
    if(localStorage.getItem("alreadyVisited") === "true") {
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

    translate.setDefaultLang('fr');
    translate.use('fr');

    this.initializeApp();
    this.listenToLoginEvents();
  }

  incr() {
    this.values.count++;
  }

  newValues() {
    this.values = {name: 'patrice', count: 42, artist: undefined};
  }

  newTemplate() {
    this.html = `<ion-item>
    <ion-label>{{values.name}}</ion-label>
    <div item-content>{{values.artist}} {{values.count}}</div>
  </ion-item>`;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is("cordova")) {
        Splashscreen.hide();
      }

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
  if (!loggedIn) {
    this.things = [];
  }
  else {
    this.HallService.getHalls().subscribe(list => this.things = list);
  }
}

  openHall(hall) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(ThingsList, {hallId: hall.$key});
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
