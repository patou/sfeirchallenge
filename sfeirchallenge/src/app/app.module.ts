import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Swiper } from '../pages/swiper/swiper';
import { MusicList } from '../pages/music-list/music-list';
import { BookList } from '../pages/book-list/book-list';
import { HallList } from '../pages/hall-list/hall-list';
import { CartList } from '../pages/cart-list/cart-list';
import { GameList } from '../pages/game-list/game-list';
import { TravelList } from '../pages/travel-list/travel-list';
import { VideoList } from '../pages/video-list/video-list';
import { WineList } from '../pages/wine-list/wine-list';
import { SettingsPage } from '../pages/settings/settings';
import { CreateEntity } from '../pages/create-entity/create-entity';

@NgModule({
  declarations: [
    MyApp,
    Swiper,
    MusicList,
    BookList,
    HallList,
    CartList,
    GameList,
    TravelList,
    WineList,
    VideoList,
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
    MusicList,
    BookList,
    HallList,
    CartList,
    GameList,
    TravelList,
    WineList,
    VideoList,
    SettingsPage,
    CreateEntity
  ],
  providers: []
})
export class AppModule {}
