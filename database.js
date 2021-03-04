const admin = require('firebase-admin');

//we need to set up a firebase db and add credential here
admin.initializeApp();

const db = admin.firestore();