import { Injectable } from '@angular/core';
import { Hall, Model } from './hallthings';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

export const HALLS: Model[] = [
  { name: 'Mes Livres', color: '#2ecc71', icon: 'book', type: 'book', html:`<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>{{values.author}}</ion-card-content>
  </ion-card>`},
  { name: 'Mes DVD', color: '#9b59b6', icon: 'disc', type: 'video' , html:`<ion-card>
      <ion-card-header>{{values.name}}</ion-card-header>
      <ion-card-content>{{values.producer}}</ion-card-content>
      </ion-card>`},
  { name: 'Ma liste de course', color: '#3498db', icon: 'cart', type:'cart' , html:`<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>{{values.brand}}</ion-card-content>
  </ion-card>`},
  { name: 'Mes jeux', color: '#95a5a6', icon: 'logo-playstation', type:'game' , html:`<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>{{values.editor}}</ion-card-content>
  </ion-card>`},
  { name: 'Ma musique', color: '#d35400', icon: 'musical-notes', type: 'music' , html:`<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>{{values.artist}}</ion-card-content>
  </ion-card>`},
  { name: 'Mes voyages', color: '#f1c40f', icon: 'jet', type: 'travel' , html:`<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>{{values.where}}</ion-card-content>
  </ion-card>`},
  { name: 'Mes vins', color: '#8e44ad', icon: 'wine', type: 'wine' , html:`<ion-card>
    <ion-card-header>{{values.name}}</ion-card-header>
    <ion-card-content>{{values.variety}}</ion-card-content>
  </ion-card>`}
];

@Injectable()
export class HallService {
    halls : FirebaseListObservable<Hall[]>;
    constructor(private af: AngularFire) {
      this.halls = af.database.list('halls');
    }

    getHallsAvailable(): Model[] {
        return HALLS;
    }

    getHalls(): FirebaseListObservable<Hall[]> {
        return this.halls;
    }

    getHall(id: string): FirebaseObjectObservable<Hall> {
        return this.af.database.object("halls/"+id);//this.halls.find(hall => hall.type === type);
    }

    getModel(type: string): Model {
      return HALLS.find(el => el.type == type)
    }

    create(hall:Hall):firebase.database.ThenableReference {
      return this.halls.push(hall);
    }
}
