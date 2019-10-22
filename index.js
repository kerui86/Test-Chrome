const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
   console.log("Estoy listo!");
});

var prefix = config.prefix;

bot.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.reply("ey baby!");  
  }
  if (message.content.startsWith(prefix + "Chrome, y Karenn?")) {
    message.channel.send("p-porque preguntas por ella tan de pronto?");
  }
  if (message.content === prefix + "pre") {
    message.channel.send("<@&635788170599989268> Preparaos, atacamos en unos minutos");
  }
  if (message.content === prefix + "ata") {
    message.channel.send("<@&635788170599989268> Atacamos con minis, gruta y/o episodio. No olvides confirmar el ataque a continuación");
  }
});
bot.login(config.token);       