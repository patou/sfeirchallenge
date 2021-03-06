import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, reorderArray, AlertController, List, PopoverController } from 'ionic-angular';
import { HallService } from "../../providers/hall.service";
import { UserData } from "../../providers/user-data";
import { Hall, propertyTypes, Property } from "../../providers/hallthings";

@Component({
  selector: 'update-hall',
  templateUrl: 'update-hall.html'
})
export class UpdateHall {
  reorder = false;
  hall: Hall;
  hallId: string;
  @ViewChild(List) list: List;
  constructor(public nav: NavController, public navParams: NavParams, private alertCtrl: AlertController, private popoverCtrl: PopoverController, private toastCtrl: ToastController, private HallService: HallService, private UserData: UserData) {

    this.hallId = navParams.get('hallId');

    HallService.getHall(this.hallId).subscribe(hall => {
      this.hall = hall;
    });
  }

  toggleReorder() {
    this.reorder = !this.reorder;
  }

   reorderItems(indexes) {
     this.hall.properties = reorderArray(this.hall.properties, indexes);
   }

   deleteProperties(property) {
     let alert = this.alertCtrl.create({
        title: `Suppression d'une propriété`,
        message: `Voulez vous supprimer la propriété ${property.name}?`,
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
              this.list.closeSlidingItems();
            }
          },
          {
            text: 'Oui',
            handler: () => {
              this.hall.properties.splice(this.hall.properties.indexOf(property), 1);
              this.list.closeSlidingItems();
            }
          }
        ]
      });
      alert.present();
   }

   editProperties(property) {
     let inputs :any[] = [{
             name: 'label',
             value: property.label
           }];
     if (property.type === 'SELECT') {
       inputs.push({
             name: 'values',
             placeholder: 'Valeurs (séparé par des virgules)',
             value: property.values
           });
     }
     let alert = this.alertCtrl.create({
         title: 'Modifier une propriété',
         inputs: inputs,
         buttons: [
           {
             text: 'Annuler',
             role: 'cancel',
             handler: data => {
               console.log('Cancel clicked');
               this.list.closeSlidingItems();
             }
           },
           {
             text: 'Changer',
             handler: data => {
               property.label = data.label;
               if (data.values)
                  property.values = data.values;
               this.list.closeSlidingItems();
             }
           }
         ]
       });
       alert.present();
   }

   toggleDisplayInList(property) {
     property.displayInList = !property.displayInList;
   }

  save() {
    this.HallService.update(this.hallId, this.hall).then(() => {
      this.nav.pop();
    });
  }

  addNewProperties(event) {
    let popover = this.popoverCtrl.create(UpdateHallPopoverPage);
    popover.present({
      ev: event
    });
    popover.onDidDismiss((type) => {
      if (type) {
          this.askNewPropertyLabel(type);
      }
    });
  }

  private askNewPropertyLabel(type) {
    let inputs :any[] = [{
             name: 'label'
           }];
     if (type === 'SELECT') {
       inputs.push({
             name: 'values',
             placeholder: 'Valeurs (séparé par des virgules)'
           });
     }
    let alert = this.alertCtrl.create({
       title: 'Ajouter une propriété',
       inputs: inputs,
       buttons: [
         {
           text: 'Annuler',
           role: 'cancel',
           handler: data => {
             console.log('Cancel clicked');
             this.list.closeSlidingItems();
           }
         },
         {
           text: 'Ajouter',
           handler: data => {
            this.createNewProperty(type, data.label, data.values);
           }
         }
       ]
     });
     alert.present();
  }

  private createNewProperty(type:string, label:string, values?: string) {
      let name = label.toLowerCase().replace(/[^a-z0-9]/g, '');
      //todo faire attention aux collisions.
      let property:Property = {label: label, type: type, name: name, displayInList: this.hall.properties.length <= 5};
      if (values)
         property.values = values;


      this.hall.properties.push(property);
  }
}
@Component({
  template: `
    <ion-list>
      <ion-list-header>Ajouter une propriété</ion-list-header>
      <button ion-item (click)="close(property)" *ngFor="let property of propertyTypes">{{'PropertyType.'+property | translate}}</button>
    </ion-list>
  `
})
export class UpdateHallPopoverPage {
  propertyTypes: any;
  constructor(public viewCtrl: ViewController) {
    this.propertyTypes = propertyTypes;
  }

  close(type) {
    this.viewCtrl.dismiss(type);
  }
}
