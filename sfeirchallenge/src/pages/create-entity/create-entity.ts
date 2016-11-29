import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'create-entity',
  templateUrl: 'create-entity.html'
})
export class CreateEntity {

  templates: Array<{name: string, icon: string}>;

  constructor(public navCtrl: NavController) {

    this.templates = [
      { name: 'Livres', icon: 'book' },
      { name: 'DVD', icon: 'disc' },
      { name: 'Liste de course', icon: 'cart' },
      { name: 'Jeux', icon: 'logo-playstation' },
      { name: 'Musique', icon: 'musical-notes' },
      { name: 'Voyages', icon: 'jet' },
      { name: 'Vins', icon: 'wine' }
    ];
  }
}
