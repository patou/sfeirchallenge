import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'music-list',
  templateUrl: 'music-list.html'
})
export class MusicList {
  selectedItem: any;
  icons: string[];
  items: Array<{titre: string, year: number, picture: string, author: string, album: string, note: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
  {
    "titre": "non laboris non",
    "author": "Rosetta Robertson",
    "album": "Tempor velit dolor ea officia labore id cupidatat excepteur dolor nisi excepteur qui cupidatat culpa.",
    "year": 1986,
    "picture": "http://placehold.it/32x32",
    "note": 3
  },
  {
    "titre": "qui cupidatat ullamco",
    "author": "Rosie Horn",
    "album": "Id proident consequat Lorem ut nisi.",
    "year": 1976,
    "picture": "http://placehold.it/32x32",
    "note": 4
  },
  {
    "titre": "mollit est do",
    "author": "Estes Fernandez",
    "album": "Enim sint exercitation in proident nulla dolor elit esse dolor velit.",
    "year": 2010,
    "picture": "http://placehold.it/32x32",
    "note": 5
  },
  {
    "titre": "consectetur voluptate veniam",
    "author": "Bette Underwood",
    "album": "Dolor tempor ea adipisicing et ea incididunt commodo nulla deserunt ipsum incididunt pariatur magna voluptate.",
    "year": 2002,
    "picture": "http://placehold.it/32x32",
    "note": 3
  },
  {
    "titre": "anim pariatur ad",
    "author": "Leola Fitzpatrick",
    "album": "Excepteur minim cupidatat ipsum et sunt sit voluptate sint.",
    "year": 1980,
    "picture": "http://placehold.it/32x32",
    "note": 3
  },
  {
    "titre": "ut ut in",
    "author": "Vance House",
    "album": "Sit Lorem ea ea tempor enim non veniam cillum sit cupidatat eiusmod elit.",
    "year": 2000,
    "picture": "http://placehold.it/32x32",
    "note": 4
  },
  {
    "titre": "deserunt aliqua tempor",
    "author": "Dale Raymond",
    "album": "Amet sit nisi aliqua proident sit officia.",
    "year": 2003,
    "picture": "http://placehold.it/32x32",
    "note": 3
  },
  {
    "titre": "elit et amet",
    "author": "Geneva Duncan",
    "album": "Aute eu non sit est ullamco mollit veniam adipisicing eiusmod nostrud fugiat.",
    "year": 2007,
    "picture": "http://placehold.it/32x32",
    "note": 4
  },
  {
    "titre": "incididunt anim in",
    "author": "Good Bentley",
    "album": "Nulla culpa dolor nulla enim fugiat ullamco do irure aliquip esse adipisicing.",
    "year": 2012,
    "picture": "http://placehold.it/32x32",
    "note": 1
  },
  {
    "titre": "dolor sunt laboris",
    "author": "Georgina Klein",
    "album": "Consectetur velit do amet aliquip amet occaecat est quis est.",
    "year": 1999,
    "picture": "http://placehold.it/32x32",
    "note": 1
  },
  {
    "titre": "excepteur ex commodo",
    "author": "Morris Perez",
    "album": "Laborum id id consequat veniam pariatur occaecat nisi et nulla laborum aliqua in.",
    "year": 2001,
    "picture": "http://placehold.it/32x32",
    "note": 3
  },
  {
    "titre": "irure exercitation ea",
    "author": "Callie Wallace",
    "album": "Cupidatat culpa do ut veniam excepteur aliqua ad.",
    "year": 2002,
    "picture": "http://placehold.it/32x32",
    "note": 1
  },
  {
    "titre": "consequat excepteur adipisicing",
    "author": "Walton Le",
    "album": "Laborum veniam excepteur sunt veniam labore proident voluptate commodo aliqua in cillum pariatur aliqua.",
    "year": 1990,
    "picture": "http://placehold.it/32x32",
    "note": 3
  },
  {
    "titre": "cupidatat ipsum eu",
    "author": "Ashlee Powers",
    "album": "Consectetur et velit aute exercitation.",
    "year": 1986,
    "picture": "http://placehold.it/32x32",
    "note": 1
  },
  {
    "titre": "et occaecat sit",
    "author": "Dale May",
    "album": "Commodo voluptate ad ipsum eu enim tempor aute labore quis est et.",
    "year": 2005,
    "picture": "http://placehold.it/32x32",
    "note": 1
  },
  {
    "titre": "laborum anim mollit",
    "author": "Warner Simon",
    "album": "Irure enim consequat eiusmod laboris sit ipsum laborum pariatur et nisi.",
    "year": 2004,
    "picture": "http://placehold.it/32x32",
    "note": 4
  },
  {
    "titre": "magna id ullamco",
    "author": "Gay Green",
    "album": "Do nulla pariatur et ullamco exercitation do est consequat aliqua nostrud quis culpa dolore ullamco.",
    "year": 1992,
    "picture": "http://placehold.it/32x32",
    "note": 1
  },
  {
    "titre": "excepteur duis non",
    "author": "Louisa Cantu",
    "album": "Eu do occaecat occaecat minim eu do consectetur officia occaecat.",
    "year": 1996,
    "picture": "http://placehold.it/32x32",
    "note": 2
  },
  {
    "titre": "excepteur in mollit",
    "author": "Foley Irwin",
    "album": "Tempor incididunt consectetur sunt id sit dolor excepteur.",
    "year": 1991,
    "picture": "http://placehold.it/32x32",
    "note": 3
  },
  {
    "titre": "mollit laboris qui",
    "author": "Dena Buckley",
    "album": "Sint amet enim dolor fugiat cupidatat aliqua.",
    "year": 1981,
    "picture": "http://placehold.it/32x32",
    "note": 3
  }
];

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MusicList, {
      item: item
    });
  }
}
