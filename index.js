const Discord = require('discord.js');
const client = new Discord.Client();

const db = require("./database.js");

const keep_alive = require("./keep_alive.js");

const {bot_token} = process.env;

const prefix = "l!";

const admin_ids = ["239770148305764352","786998746206568448","582690478047232001","235357995461115905","516298819806298143","461665490520244226","456172938140581929","222426070664740867","490933512027897868","248224600129798144"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('LRR List stuff', { type: 'PLAYING' });
});

client.on('message', async message => {
  console.log(!admin_ids.includes(message.author.id))
  if (!admin_ids.includes(message.author.id)) {
    return
  }
  if (message.content.startsWith(prefix+"help")) {
    const HelpEmbed = new Discord.MessageEmbed()
      .setTitle('Help')
      .addField(prefix+'help','Shows this help message')
      .addField(prefix+'viewpending','View and judge pending submissions')
      .addField(prefix+'viewlist','View the levels list')
      .addField(prefix+'addtolist [arguments tbd]','Add new level to list')
      .setTimestamp()
    message.channel.send(HelpEmbed)
  } else if (message.content.startsWith(prefix+"viewpending")) {

  } else if (message.content.startsWith(prefix+"viewlist")) {

  }  else if (message.content.startsWith(prefix+"addtolist")) {

  }
});

client.login(bot_token);
