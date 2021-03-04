const Discord = require('discord.js');
const client = new Discord.Client();

const db = require("./database.js");

const keep_alive = require("./keep_alive.js");

const {bot_token} = process.env;

const prefix = "l!";

const admin_ids = ["239770148305764352","786998746206568448"];

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
