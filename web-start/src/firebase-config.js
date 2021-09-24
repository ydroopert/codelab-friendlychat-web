/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBIJ_vw2oiB1vdWdE3tBkuJ7zIR2QmLwN4",
  authDomain: "friendlyeats-cb467.firebaseapp.com",
  projectId: "friendlyeats-cb467",
  storageBucket: "friendlyeats-cb467.appspot.com",
  messagingSenderId: "1099081411657",
  appId: "1:1099081411657:web:310357bcd40a9fc4276398",
  measurementId: "G-24YZHQVMS1"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}