import { Injectable } from '@angular/core';
import { Thing } from './hallthings';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class ThingsService {

    constructor(private af: AngularFire) {

    }

    getThings(hallId:string): FirebaseListObservable<Thing[]> {
        return this.af.database.list('things/'+hallId);
    }

    getThing(hallId:string, id: string): FirebaseObjectObservable<Thing> {
        return this.af.database.object("things/"+hallId+"/"+id);//this.halls.find(hall => hall.type === type);
    }

    create(hallId:string, thing:Thing):firebase.database.ThenableReference {
      return this.af.database.list('things/'+hallId).push(thing);
    }

    update(hallId:string, thing:Thing, thingKey: string):firebase.Promise<void> {
      return this.af.database.object('things/'+hallId+'/'+thingKey).update(thing);
    }

    delete(hallId: string, thingId: string): firebase.Promise<void> {
      return this.af.database.object('things/'+hallId+'/'+thingId).remove();
    }
}
