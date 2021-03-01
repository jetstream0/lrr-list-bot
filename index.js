const Discord = require('discord.js');
const client = new Discord.Client();

const firebase = require('firebase-admin');

const {bot_token} = process.env;

const prefix = "lrr!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('LRR List stuff', { type: 'PLAYING' });
});

client.on('message', async message => {
});

client.login(token);