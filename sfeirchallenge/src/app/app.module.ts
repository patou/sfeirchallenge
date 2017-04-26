import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { HallThingsApp } from './app.component';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { SettingsPage } from '../pages/settings/settings';
import { CreateEntity } from '../pages/create-entity/create-entity';
import { CreateHall } from '../pages/create-hall/create-hall';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';

import { HallService } from '../providers/hall.service';
import { ThingsService } from '../providers/things.service';
import { UserData } from '../providers/user-data';

import { OptionIcon } from '../component/ion-option-icon';
import { HtmlOutlet } from '../component/html-outlet';
import { TextType } from '../component/type/text';
import { NumberType } from '../component/type/number';
import { DateTimeType } from '../component/type/date-time';
import { TextAreaType } from '../component/type/textarea-type';

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
    OptionIcon,
    HtmlOutlet,
    HallList,
    ThingsList,
    CreateHall,
    SettingsPage,
    AccountPage,
    LoginPage,
    SignupPage,
    CreateEntity,
    TextType,
    NumberType,
    DateTimeType,
    TextAreaType
  ],
  imports: [
    BrowserModule,
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
    CreateHall,
    SettingsPage,
    AccountPage,
    LoginPage,
    SignupPage,
    CreateEntity
  ],
  providers: [
    HallService,
    ThingsService,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
