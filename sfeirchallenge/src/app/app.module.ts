import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { HallThingsApp } from './app.component';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { SettingsPage } from '../pages/settings/settings';
import { CreateEntity } from '../pages/create-entity/create-entity';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';

import { HallService } from '../providers/hall.service';
import { UserData } from '../providers/user-data';

export const myFirebaseConfig = {
    apiKey: "AIzaSyBgnWNzntzgNTHNUJlqkm5EEv-3bM1LzyA",
    authDomain: "hallthings-d1097.firebaseapp.com",
    databaseURL: "https://hallthings-d1097.firebaseio.com",
    projectId: "hallthings-d1097",
    storageBucket: "hallthings-d1097.appspot.com",
    messagingSenderId: "391152955497"
  };

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    HallThingsApp,
    Swiper,
    HallList,
    ThingsList,
    SettingsPage,
    AccountPage,
    LoginPage,
    SignupPage,
    CreateEntity
  ],
  imports: [
    IonicModule.forRoot(HallThingsApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HallThingsApp,
    Swiper,
    HallList,
    ThingsList,
    SettingsPage,
    AccountPage,
    LoginPage,
    SignupPage,
    CreateEntity
  ],
  providers: [HallService, UserData]
})
export class AppModule {}
