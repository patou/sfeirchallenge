import { Model } from './hallthings';

export const HALLS: Model[] = [
  { name: 'Simple',
  color: '#2ecc71',
  icon: 'add',
  type: 'none',
  html:`<ion-item>
  Chargement...
  </ion-item>`,
  properties : [{
    label: "Titre",
    name: "name",
    type: 'TEXT',
    displayInList: true
  }
]
},
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
    type: 'TEXT',
    displayInList: true
  },
  {
    label: "Auteur",
    name: "author",
    type: 'TEXT',
    displayInList: true
  },
  {
    label: "Date",
    name: "date",
    type: 'DATE',
    displayInList: true
  },
  {
    label: "Résumé",
    name: "desc",
    type: 'TEXTAREA',
    displayInList: true
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
  type: 'TEXT',
    displayInList: true
},
{
  label: "Photo",
  name: "photo",
  type: 'PICTURE',
  displayInList: true
},
{
  label: "Note",
  name: "note",
  type: 'STAR',
  displayInList: true
},
{
  label: "Producteur",
  name: "productor",
  type: 'TEXT',
    displayInList: true
},
{
  label: "Acteurs",
  name: "actors",
  type: 'TEXT',
    displayInList: true
},

{
  label: "Date de sortie",
  name: "date",
  type: 'DATE',
    displayInList: true
},
{
  label: "Résumé",
  name: "desc",
  type: 'TEXTAREA',
    displayInList: true
},
]
},
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
  type: 'TEXT',
    displayInList: true
},
{
  label: "Studio",
  name: "editor",
  type: 'TEXT',
    displayInList: true
},
{
  label: "Photo",
  name: "photo",
  type: 'PICTURE',
  displayInList: true
},
{
  label: "Note",
  name: "note",
  type: 'STAR',
  displayInList: true
},
{
  label: "Genre",
  name: "genre",
  type: 'TEXT',
    displayInList: true
},
{
  label: "Plateforme",
  name: "plateform",
  type: 'TEXT',
    displayInList: true
},
{
  label: "Date de sortie",
  name: "date",
  type: 'DATE',
    displayInList: true
},
{
  label: "Résumé",
  name: "desc",
  type: 'TEXTAREA',
    displayInList: true
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
  type: 'TEXT',
    displayInList: true
},
{
  label: "Nom de l'artiste",
  name: "artist",
  type: 'TEXT',
    displayInList: true
},
{
  label: "Genre de musique",
  name: "genre",
  type: 'SELECT',
  values: "Classique,Rock,Rap,Variétés,Pop,Métal",
  displayInList: true
},
{
  label: "Photo",
  name: "photo",
  type: 'PICTURE',
  displayInList: true
},
{
  label: "Note",
  name: "note",
  type: 'STAR',
  displayInList: true
},
{
  label: "Date de sortie",
  name: "date",
  type: 'DATETIME',
    displayInList: true
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
  type: 'TEXT',
    displayInList: true
},
{
  label: "Photo",
  name: "photo",
  type: 'PICTURE',
  displayInList: true
},
{
  label: "Note",
  name: "note",
  type: 'STAR',
  displayInList: true
},
{
  label: "Couleur",
  name: "color",
  type: 'COLOR',
  displayInList: true
},
{
  label: "Date",
  name: "date",
  type: 'DATETIME',
    displayInList: true
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
  type: 'TEXT',
    displayInList: true
},
{
  label: "Année",
  name: "date",
  type: 'YEAR',
    displayInList: true
},
{
  label: "Varieté",
  name: "variety",
  type: 'SELECT',
  values: 'Rouge,Blanc,Rosé',
    displayInList: true
}
]}
];
