
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { HallThingsApp } from './app.component';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { SettingsPage } from '../pages/settings/settings';
import { UpdateThing } from '../pages/update-thing/update-thing';
import { ViewThing } from '../pages/view-thing/view-thing';
import { CreateHall } from '../pages/create-hall/create-hall';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { UpdateHall, UpdateHallPopoverPage } from '../pages/update-hall/update-hall';

import { HallService } from '../providers/hall.service';
import { ThingsService } from '../providers/things.service';
import { UserData } from '../providers/user-data';

import { OptionIcon } from '../component/ion-option-icon';
import { HtmlOutlet } from '../component/html-outlet';
import { TextType } from '../component/type/text';
import { NumberType } from '../component/type/number';
import { DateTimeType } from '../component/type/date-time';
import { TextAreaType } from '../component/type/textarea-type';
import { IconType, IconTypePopover } from '../component/type/icon';

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
    UpdateThing,
    UpdateHall,
    UpdateHallPopoverPage,
    ViewThing,
    TextType,
    NumberType,
    DateTimeType,
    TextAreaType,
    IconType,
    IconTypePopover
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
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
    UpdateThing,
    UpdateHall,
    UpdateHallPopoverPage,
    ViewThing,
    IconTypePopover
  ],
  providers: [
    HallService,
    ThingsService,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
