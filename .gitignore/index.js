const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on("ready", function() {
bot.user.setGame("comand: help")
console.log("connecté");});

bot.login(process.env.TOKEN)
