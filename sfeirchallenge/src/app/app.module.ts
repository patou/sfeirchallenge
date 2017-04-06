import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { SettingsPage } from '../pages/settings/settings';
import { CreateEntity } from '../pages/create-entity/create-entity';
import { HallService } from './hall.service';

@NgModule({
  declarations: [
    MyApp,
    Swiper,
    HallList,
    ThingsList,
    SettingsPage,
    CreateEntity
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Swiper,
    HallList,
    ThingsList,
    SettingsPage,
    CreateEntity
  ],
  providers: [HallService]
})
export class AppModule {}
