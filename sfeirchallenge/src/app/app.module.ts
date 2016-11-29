import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { MusicList } from '../pages/music-list/music-list';
import { SettingsPage } from '../pages/settings/settings';
import { CreateEntity } from '../pages/create-entity/create-entity';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    MusicList,
    SettingsPage,
    CreateEntity
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    MusicList,
    SettingsPage,
    CreateEntity
  ],
  providers: []
})
export class AppModule {}
