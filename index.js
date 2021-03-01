const Discord = require('discord.js');
const client = new Discord.Client();

const firebase = require('firebase-admin');

const {bot_token} = process.env;

const prefix = "l!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('LRR List stuff', { type: 'PLAYING' });
});

client.on('message', async message => {
  if (message.content.startsWith(prefix+"help")) {
  } else if (message.content.startsWith(prefix+"approve")) {
  }
});

client.login(token);
