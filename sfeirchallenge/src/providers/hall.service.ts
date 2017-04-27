import { Injectable } from '@angular/core';
import { Hall, Model, PropertyType } from './hallthings';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

export const HALLS: Model[] = [
  { name: 'Mes Livres',
  color: '#2ecc71',
  icon: 'book',
  type: 'book',
  html:`<ion-card>
  <ion-card-header>{{values.name}}</ion-card-header>
  <ion-card-content>{{values.author}}</ion-card-content>
  </ion-card>`,
  properties : [{
    label: "Titre",
    name: "name",
    type: PropertyType.TEXT,
  },
  {
    label: "Auteur",
    name: "author",
    type: PropertyType.TEXT,
  },
  {
    label: "ISBN",
    name: "isbn",
    type: PropertyType.TEXT,
  },
  {
    label: "Date",
    name: "date",
    type: PropertyType.DATE,
  },
  {
    label: "Résumé",
    name: "desc",
    type: PropertyType.TEXAREA,
  },
]
},
{ name: 'Mes DVD',
color: '#9b59b6',
icon: 'disc',
type: 'video' ,
html:`<ion-card>
<ion-card-header>{{values.name}}</ion-card-header>
<ion-card-content>{{values.producer}}</ion-card-content>
</ion-card>`,
properties : [{
  label: "Titre",
  name: "name",
  type: PropertyType.TEXT,
},
{
  label: "Producteur",
  name: "productor",
  type: PropertyType.TEXT,
},
{
  label: "Acteurs",
  name: "actors",
  type: PropertyType.TEXT,
},
{
  label: "Date de sortie",
  name: "date",
  type: PropertyType.DATE,
},
{
  label: "Résumé",
  name: "desc",
  type: PropertyType.TEXAREA,
},
]
},
{ name: 'Ma liste de course',
color: '#3498db',
icon: 'cart',
type:'cart' ,
html:`<ion-card>
<ion-card-header>{{values.name}}</ion-card-header>
<ion-card-content>{{values.brand}}</ion-card-content>
</ion-card>`,
properties : [{
  label: "Nom",
  name: "name",
  type: PropertyType.TEXT,
},
{
  label: "Marque",
  name: "brand",
  type: PropertyType.TEXT,
},
{
  label: "Prix",
  name: "price",
  type: PropertyType.NUMBER,
},
{
  label: "Quantité",
  name: "quantity",
  type: PropertyType.NUMBER,
},
{
  label: "Unité",
  name: "unit",
  type: PropertyType.TEXT,
},
]},
{ name: 'Mes jeux',
color: '#95a5a6',
icon: 'logo-playstation',
type:'game',
html:`<ion-card>
<ion-card-header>{{values.name}}</ion-card-header>
<ion-card-content>{{values.editor}}</ion-card-content>
</ion-card>`,
properties : [{
  label: "Nom",
  name: "name",
  type: PropertyType.TEXT,
},
{
  label: "Studio",
  name: "editor",
  type: PropertyType.TEXT,
},
{
  label: "Genre",
  name: "genre",
  type: PropertyType.TEXT,
},
{
  label: "Plateforme",
  name: "plateform",
  type: PropertyType.TEXT,
},
{
  label: "Date de sortie",
  name: "date",
  type: PropertyType.DATE,
},
{
  label: "Résumé",
  name: "desc",
  type: PropertyType.TEXAREA,
},
]},
{ name: 'Ma musique',
color: '#d35400',
icon: 'musical-notes',
type: 'music',
html:`<ion-card>
<ion-card-header>{{values.name}}</ion-card-header>
<ion-card-content>{{values.artist}}</ion-card-content>
</ion-card>`,
properties : [{
  label: "Nom de l'album",
  name: "name",
  type: PropertyType.TEXT,
},
{
  label: "Nom de l'artist",
  name: "artist",
  type: PropertyType.TEXT,
},
{
  label: "Genre de musiqeu",
  name: "genre",
  type: PropertyType.TEXT,
},
{
  label: "Date de sortie",
  name: "date",
  type: PropertyType.DATETIME,
}
]
},
{ name: 'Mes voyages',
color: '#f1c40f',
icon: 'jet',
type: 'travel',
html:`<ion-card>
<ion-card-header>{{values.name}}</ion-card-header>
<ion-card-content>{{values.where}}</ion-card-content>
</ion-card>`,
properties : [{
  label: "Lieu",
  name: "where",
  type: PropertyType.TEXT,
},
{
  label: "Date",
  name: "date",
  type: PropertyType.DATETIME,
}]},
{ name: 'Mes vins',
color: '#8e44ad',
icon: 'wine',
type: 'wine',
html:`<ion-card>
<ion-card-header>{{values.name}}</ion-card-header>
<ion-card-content>{{values.variety}}</ion-card-content>
</ion-card>`,
properties : [{
  label: "Appellation",
  name: "name",
  type: PropertyType.TEXT,
},
{
  label: "Année",
  name: "date",
  type: PropertyType.DATE,
},
{
  label: "Varieté",
  name: "variety",
  type: PropertyType.TEXT,
}
]}
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
