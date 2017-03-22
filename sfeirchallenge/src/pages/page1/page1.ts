import {CreateEntity} from "../create-entity/create-entity";
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  slides = [
      {
        title: "Hey ! Bienvenue !",
        description: "Bienvenue sur <i>ton</i> application <b>Hall of stuffs</b> </br>Prêt à saisir tout ton <b>stuff</b> ? </br></br> Commence par <i>swiper</i> vers la droite. <i class='em em-some-emoji'></i>",
        image: "assets/img/welcome.png",
      },
      {
        title: "Collectionneur?",
        description: "<b>Embarrasé par une collection importante ?</b></br>Pas le temps de prendre un papier un crayon mais tu as toujours ton téléphonne sur toi.</br>Cette appication est faite pour toi ! </br",
        image: "assets/img/smartphone.png",
      }
    ];


  constructor(public navCtrl: NavController) {

  }


  createEntity() {
    this.navCtrl.setRoot(CreateEntity);
  }
}
