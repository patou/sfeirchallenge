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
      let attr = '';
      properties.forEach((property) => {
        console.info(property.name + ': ' + property.type);
        if (property.displayInList) {
          let tag = tags[tagsIndex];
          switch (property.type) {
            case "TEXT":
              tagsIndex = tagsIndex < tags.length-1 ? tagsIndex + 1 : tags.length-1;
              html.append(`<${tag}>{{values?.${property.name}}}</${tag}>`);
              break;
            case "NUMBER":
              html.append(`<div item-right>{{values?.${property.name} | number}}</div>`);
              break;
            case "DATE":
              tagsIndex = tagsIndex < tags.length-1 ? tagsIndex + 1 : tags.length-1;
              html.append(`<${tag}>{{values?.${property.name} | date:"dd/MM/yyyy"}}</${tag}>`);
              break;
            case "DATETIME":
              tagsIndex = tagsIndex < tags.length-1 ? tagsIndex + 1 : tags.length-1;
              html.append(`<${tag}>{{values?.${property.name} | date:"dd/MM/yyyy HH:mm"}}</${tag}>`);
              break;
            case "YEAR":
              html.append(`<div item-right>{{values?.${property.name}}}</div>`);
              break;
            case "SELECT":
              html.append(`<div item-right>{{values?.${property.name}}}</div>`);
              break;
            case "TEXTAREA":
              html.append(`<p>{{values?.${property.name}}}</p>`);
              break;
            case "ICON":
              html.insert(`<ion-icon [name]="values?.${property.name}" item-left></ion-icon>`, 0);
              break;
            case "COLOR":
              attr += ` [style.backgroundColor]="values?.${property.name}"`;
              break;
            case "PICTURE":
              html.insert(`<picture-thumbnail [image]=\"values?.${property.name}\"  item-left></picture-thumbnail>`, 0);
              break;
            case "STAR":
              html.append(`<div item-right><ion-icon *ngFor="let rate of [1,2,3,4,5]" [name]="rate <= values?.${property.name} ? 'star' : 'star-outline'"></ion-icon></div>`)
              break;
          }
        }
      });
      html.insert(`<ion-item${attr}>`, 0);
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

exports.countThingsInHalls = functions.database.ref('/things/{hallId}')
    .onWrite(event => {
      // Grab the current value of what was written to the Realtime Database.
      const hallId = event.params.hallId;
      const count = event.data.numChildren();
      return admin.database().ref('/halls').child(hallId).child('count').set(count);
    });

    const gcs = require('@google-cloud/storage')();
    const spawn = require('child-process-promise').spawn;
    const LOCAL_TMP_FOLDER = '/tmp/';

    // Max height and width of the thumbnail in pixels.
    const THUMB_MAX_HEIGHT = 200;
    const THUMB_MAX_WIDTH = 200;
    // Thumbnail prefix added to file names.
    const THUMB_PREFIX = 'thumbnail';

    exports.generateThumbnail = functions.storage.object().onChange(event => {
      const filePath = event.data.name;
      const filePathSplit = filePath.split('/');
      const fileName = filePathSplit.pop();
      const thumbFilePath = THUMB_PREFIX + "/"+ filePath;
      const tempLocalDir = `${LOCAL_TMP_FOLDER}`;
      const tempLocalFile = `${tempLocalDir}${fileName}`;
      const tempLocalThumbFile = `${tempLocalDir}${THUMB_PREFIX}${fileName}`;

      // Exit if this is triggered on a file that is not an image.
      if (!event.data.contentType.startsWith('image/')) {
        console.log('This is not an image.');
        return;
      }

      // Exit if the image is already a thumbnail.
      if (filePath.startsWith(THUMB_PREFIX)) {
        console.log('Already a Thumbnail.');
        return;
      }

      // Exit if this is a move or deletion event.
      if (event.data.resourceState === 'not_exists') {
        console.log('This is a deletion event.');
        return;
      }

      // Create the temp directory where the storage file will be downloaded.

        // Download file from bucket.
      const bucket = gcs.bucket(event.data.bucket);
      return bucket.file(filePath).download({
        destination: tempLocalFile
      }).then(() => {
          console.log('The file has been downloaded to', tempLocalFile);
          // Generate a thumbnail using ImageMagick.
          return spawn('convert', [tempLocalFile, '-thumbnail', `${THUMB_MAX_WIDTH}x${THUMB_MAX_HEIGHT}>`, tempLocalThumbFile]).then(() => {
            console.log('Thumbnail created at', tempLocalThumbFile);
            // Uploading the Thumbnail.
            return bucket.upload(tempLocalThumbFile, {
              destination: thumbFilePath,
              metadata: {
                contentType: event.data.contentType
              }
            }).then(() => {
              console.log('Thumbnail uploaded to Storage at', thumbFilePath);
            });
          });
        });
    });
