const Discord = require('discord.js');
const client = new Discord.Client();

const db = require("./database.js");

const keep_alive = require("./keep_alive.js");

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

client.login(bot_token);
