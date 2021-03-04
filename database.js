//https://firebase.google.com/docs/admin/setup
//https://firebase.google.com/docs/database/admin/start#node.js
//https://firebase.google.com/docs/database/admin/save-data
//https://firebase.google.com/docs/database/admin/retrieve-data
const admin = require('firebase-admin');

//we need to set up a firebase db and add credential here
admin.initializeApp();

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