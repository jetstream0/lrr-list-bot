//https://firebase.google.com/docs/admin/setup
//https://firebase.google.com/docs/database/admin/start#node.js
//https://firebase.google.com/docs/database/admin/save-data
//https://firebase.google.com/docs/database/admin/retrieve-data
//https://github.com/rk097/gdlrrlist.cf/blob/main/htdocs/JS/mainlist.json
//https://github.com/rk097/gdlrrlist.cf/blob/main/htdocs/JS/leaderboard.json
const admin = require('firebase-admin');

const serviceAccount = require('./service-account-file.json');

const {dbURL} = process.env;

//we need to set up a firebase db and add credential here
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbURL
});

const db = admin.database();

//add is the same as set
function add(path, document) {

}

function update(path, document) {

}

function push(path, document) {

}

//read is getting 
function read(path, key) {

}