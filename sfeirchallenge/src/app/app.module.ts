import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HallThingsApp } from './app.component';
import { Swiper } from '../pages/swiper/swiper';
import { HallList } from '../pages/hall-list/hall-list';
import { ThingsList } from '../pages/things-list/things-list';
import { SettingsPage } from '../pages/settings/settings';
import { CreateEntity } from '../pages/create-entity/create-entity';
import { HallService } from '../providers/hall.service';

@NgModule({
  declarations: [
    HallThingsApp,
    Swiper,
    HallList,
    ThingsList,
    SettingsPage,
    CreateEntity
  ],
  imports: [
    IonicModule.forRoot(HallThingsApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HallThingsApp,
    Swiper,
    HallList,
    ThingsList,
    SettingsPage,
    CreateEntity
  ],
  providers: [HallService]
})
export class AppModule {}
