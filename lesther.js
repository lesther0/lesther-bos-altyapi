const Discord = require('discord.js');
const client = new Discord.Client();
const config = require (`./settings.json`)
const { prefix, owner } = require (`./settings.json`)
const AsciiTable = require (`ascii-table`)
const fs = require("fs");
require('./util/eventHandler.js')(client);
var table = new AsciiTable('lesther Command Table');

const fetch = require("node-fetch");
let logKanali = "LOGKANALID"

client.on("message", async msg => {
  if(msg.author.bot) return;
  let kullanici = msg.mentions.members.first()
  if(msg.channel.id != "LOGKANALID") return;
  var messageReq = encodeURI(msg.content);
  if (kullanici) {
    kullanici.ban({reason: `Bu yasaklama yönetim tarafından atıldı detaylı bilgiler için `}).catch();
msg.channel.send(`${kullanici}, başarılı bir şekilde banlandı.`)
client.channels.cache.get(logKanali).send(`${msg.author} Tarafından ${kullanici} adlı üyenin banı kanal tarafından atıldı.`).then(m =>m.delete(7000));

};
 
  })
       

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);
  table.setHeading("Command", 'Status', "Aliases")
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  table.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  table.addRow(komutcuklar.help.name, "❌")
  continue;
    }
 
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });

    console.log(table.toString())
  }
  
})



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === owner) permlvl = 4;
  return permlvl;
};

  
client.login(config.token);