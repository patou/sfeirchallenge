import { BehaviorSubject, Observable } from "rxjs";
import { Events } from "ionic-angular";
import { Subject } from "rxjs";
import { Injectable } from '@angular/core';
import { Hall, Model } from './hallthings';
import { UserData } from './user-data';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { HALLS } from './models';

@Injectable()
export class HallService {
  subcription: any;
  halls : BehaviorSubject<Hall[]>;

  constructor(private af: AngularFire, private userService : UserData, public events: Events) {
    this.halls = new BehaviorSubject([]);
    this.events.subscribe('user:login', () => {
      this.loadHalls();
    });

    this.events.subscribe('user:signup', () => {
      this.loadHalls();
    });

    this.events.subscribe('user:logout', () => {
      this.halls.next([]);
      if (this.subcription) this.subcription.unsubscribe();
    });
  }

  loadHalls() {
    this.userService.getUid().then((userId) => {
      this.subcription =  this.af.database.list('halls', {query: {
        orderByChild: 'owner',
        equalTo: userId
      }}).subscribe((halls) => {
        this.halls.next(halls);
      });
    });
  }

  getHallsAvailable(): Model[] {
    return HALLS;
  }

  getHalls(): Observable<Hall[]> {
    return this.halls;
  }

  getHall(id: string): FirebaseObjectObservable<Hall> {
    return this.af.database.object("halls/"+id);//this.halls.find(hall => hall.type === type);
  }

  getModel(type: string): Model {
    return HALLS.find(el => el.type == type)
  }

  create(hall:Hall):firebase.database.ThenableReference {
    return this.af.database.list('halls').push(hall);
  }

  update(hallId:string, hall:Hall):firebase.Promise<void> {
    return this.af.database.object('halls/'+hallId).update(hall);
  }
}
