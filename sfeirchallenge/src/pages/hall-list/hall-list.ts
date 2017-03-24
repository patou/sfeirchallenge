import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CreateEntity } from '../../pages/create-entity/create-entity';

@Component({
  selector: 'page-hall-list',
  templateUrl: 'hall-list.html'
})
export class HallList {
  selectedItem: any;

  things : Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for (var key in localStorage){

      if(key !== "alreadyVisited") {
        let objectByKey:Array<any> = JSON.parse(localStorage.getItem(String(key)));
        console.log(objectByKey);
        console.log(objectByKey.length);
        let object = {
          type : objectByKey[0].type,
          count : objectByKey.length,
          name : this.getNameFromString(objectByKey[0].type),
          color : 'red'
        }

        this.things.push(object);
      }

      console.log(this.things);

    }


  }
  //CRACRA ... Methode temporaire tant qu'il y 'a pas d'enumeration ou quelque chose de plus inteligent
  getNameFromString(type) {

    switch (type) {
      case 'book' :
        return 'Mes Livres';
      case 'cart' :
          return 'Ma liste de course';
      case 'video' :
              return 'Mes videos';
      case 'game' :
          return 'Mes jeux video';
      case 'music' :
          return 'Mes musiques';
      case 'travel' :
          return 'Mes voyages';
      case 'wine' :
          return 'Mes vins';
      default :
        return 'Inconnue';
    }
  }
}
