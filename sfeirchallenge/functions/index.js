const functions = require('firebase-functions');
const admin = require('firebase-admin');
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
