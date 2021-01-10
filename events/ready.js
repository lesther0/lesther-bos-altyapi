const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../settings.json')

module.exports = client => {

console.log("");

var randomMesajlar = [

    "lesther Boş Altyapı",
    "lesther#6351"
]




setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);

}, 2 * 30000);

client.user.setStatus("dnd");
/*

idle = Boşta
dnd = Rahatsız Etmeyin
online = Çevrimiçi
insivible = Görünmez
*/


}
