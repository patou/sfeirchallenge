
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
import { ColorType, ColorTypePopover } from '../component/type/color';
import { StarType } from '../component/type/star';
import { SelectType } from '../component/type/select';
import { PictureType } from '../component/type/picture';
import { PictureDisplay } from '../component/picture';

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
    IconTypePopover,
    ColorType,
    ColorTypePopover,
    PictureType,
    PictureDisplay,
    StarType,
    SelectType
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
    AccountPage,
    LoginPage,
    SignupPage,
    UpdateThing,
    UpdateHall,
    UpdateHallPopoverPage,
    ViewThing,
    IconTypePopover,
    ColorTypePopover
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
