import {CreateEntity} from "../create-entity/create-entity";
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-swiper',
  templateUrl: 'swiper.html'
})
export class Swiper {

  slides = [
      {
        title: "Hey ! Bienvenue !",
        description: "Bienvenue sur <i>ton</i> application <b>Hall things</b> </br>Prêt à saisir tout tes <b>Objets</b> ? </br></br> Commence par <i>swiper</i> vers la droite. <i class='em em-some-emoji'></i>",
        image: "assets/img/welcome.png",
      },
      {
        title: "Collectionneur?",
        description: "<b>Embarrasé par une collection importante ?</b></br>Pas le temps de prendre un papier un crayon mais tu as toujours ton téléphonne sur toi.</br>Cette appication est faite pour toi ! </br",
        image: "assets/img/ica-slidebox-img-2.png",
      }
    ];


  constructor(public navCtrl: NavController) {

  }


  createEntity() {
    localStorage.setItem("alreadyVisited", "true");
    this.navCtrl.setRoot(CreateEntity);
  }
}
