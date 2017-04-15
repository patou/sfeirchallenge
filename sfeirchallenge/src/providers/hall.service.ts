import { Injectable } from '@angular/core';
import { Hall } from './hallthings';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export const HALLS: Hall[] = [
  { name: 'Mes Livres', color: '#2ecc71', icon: 'book', type: 'book'},
  { name: 'Mes DVD', color: '#9b59b6', icon: 'disc', type: 'video' },
  { name: 'Ma liste de course', color: '#3498db', icon: 'cart', type:'cart' },
  { name: 'Mes jeux', color: '#95a5a6', icon: 'logo-playstation', type:'game' },
  { name: 'Ma musique', color: '#d35400', icon: 'musical-notes', type: 'music' },
  { name: 'Mes voyages', color: '#f1c40f', icon: 'jet', type: 'travel' },
  { name: 'Mes vins', color: '#8e44ad', icon: 'wine', type: 'wine' }
];

@Injectable()
export class HallService {
    halls : FirebaseListObservable<Hall[]>;
    constructor(af: AngularFire) {
      this.halls = af.database.list('halls');
    }

    getHallsAvailable(): Hall[] {
        return HALLS;
    }

    getHalls(): FirebaseListObservable<Hall[]> {
        return this.halls;
    }

    getHall(type: string): Hall {
        return null;//this.halls.find(hall => hall.type === type);
    }

    create(hall:Hall) {
      this.halls.push(hall);
    }
}
