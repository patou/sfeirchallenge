import { Component, ViewChild , ElementRef } from '@angular/core';
import { ViewController, NavParams, ToastController, reorderArray, AlertController, List } from 'ionic-angular';
import { HallService } from "../../providers/hall.service";
import { ThingsService } from "../../providers/things.service";
import { UserData } from "../../providers/user-data";
import { Hall } from "../../providers/hallthings";

@Component({
  selector: 'update-hall',
  templateUrl: 'update-hall.html'
})
export class UpdateHall {
  reorder = false;
  hall: Hall;
  hallId: string;
  @ViewChild(List) list: List;
  @ViewChild('add') addButton: ElementRef;
  constructor(public view: ViewController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, private HallService: HallService, private UserData: UserData) {

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
     let alert = this.alertCtrl.create({
         title: 'Modifier une propriété',
         inputs: [
           {
             name: 'label',
             value: property.label
           }
         ],
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
      this.view.dismiss();
    });
  }

  addNewProperties() {
    let alert = this.alertCtrl.create({
       title: 'Ajouter une propriété',
       inputs: [
         {
           name: 'label',
           placeholder: 'Nom'
         }
       ],
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

           }
         }
       ]
     });
     alert.present();
  }
}
