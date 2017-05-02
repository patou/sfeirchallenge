const functions = require('firebase-functions');
const admin = require('firebase-admin');
const StringBuilder = require('stringbuilder')

admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.countThingsInHalls = functions.database.ref('/things/{hallId}')
    .onWrite(event => {
      // Grab the current value of what was written to the Realtime Database.
      const hallId = event.params.hallId;
      const count = event.data.numChildren();
      return admin.database().ref('/halls').child(hallId).child('count').set(count);
    });

exports.updatePropertiesHalls = functions.database.ref('/halls/{hallId}/properties')
    .onWrite(event => {
      // Grab the current value of what was written to the Realtime Database.
      const hallId = event.params.hallId;
      let html = new StringBuilder();
      console.info(hallId);
      let properties = event.data.val();
      let tags = ["h1", "h2", "h3", "p"];
      let tagsIndex = 0;
      properties.forEach((property) => {
        console.info(property.name + ': ' + property.type);
        if (property.displayInList) {
          let tag = tags[tagsIndex];
          switch (property.type) {
            case "TEXT":
              tagsIndex = tagsIndex < tags.length-1 ? tagsIndex + 1 : tags.length-1;
              html.append(`<${tag}>{{values.${property.name}}}</${tag}${tag}>>`);
              break;
            case "NUMBER":
              html.append(`<div item-right>{{values.${property.name} | number}}</div item-right>`);
              break;
            case "DATE":
              tagsIndex = tagsIndex < tags.length-1 ? tagsIndex + 1 : tags.length-1;
              html.append(`<${tag}>{{values.${property.name} | date}}</${tag}>`);
              break;
            case "DATETIME":
              tagsIndex = tagsIndex < tags.length-1 ? tagsIndex + 1 : tags.length-1;
              html.append(`<${tag}>{{values.${property.name} | date}}</${tag}>`);
              break;
            case "YEAR":
              html.append(`<div item-right>{{values.${property.name} | date}}</div>`);
              break;
            case "TEXTAREA":
              html.append(`<p>{{values.${property.name} | date}}</p>`);
              break;
            case "ICON":
              html.insert(`<ion-icon [name]="values.${property.name}" item-left></ion-icon>`, 0);
              break;
            case "ICON":
              html.insert(`<ion-icon [name]="values.${property.name}" item-left></ion-icon>`, 0);
              break;
          }
        }
      });
      html.insert(`<ion-item>`, 0);
      html.append(`</ion-item>`);
      let promise = new Promise((resolve, reject) => {
        html.toString((err, result) => {
          if (err) console.log(err);
          console.info(result);
          admin.database().ref('/halls').child(hallId).child('html').set(result).then(resolve).catch(result);
        });
      });
      return promise;
    });
