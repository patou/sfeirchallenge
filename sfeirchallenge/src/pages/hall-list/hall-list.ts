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
        let object = {
          type : objectByKey[0].type,
          count : objectByKey.length,
          name : this.getNameFromString(objectByKey[0].type),
          color : this.getColorFromString(objectByKey[0].type)
        }

        this.things.push(object);
      }
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

  //CRACRA pareil le temps de la demo ...
  getColorFromString(type) {

    switch (type) {
      case 'book' :
        return '#2ecc71';
      case 'cart' :
          return '#3498db';
      case 'video' :
              return '#9b59b6';
      case 'game' :
          return '#95a5a6';
      case 'music' :
          return '#d35400';
      case 'travel' :
          return '#f1c40f';
      case 'wine' :
          return '#8e44ad';
      default :
        return '#2c3e50';
    }
  }

  addNew(){
    this.navCtrl.setRoot(CreateEntity);
  }
}
