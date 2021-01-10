const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
  message.channel.send(`İşte Pingim = **${client.ws.ping}**ms!`)


};


exports.conf = {
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini Gösterir !',
  usage: 'ping'
};