const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
   console.log("Estoy listo!");
});

var prefix = config.prefix;

bot.on("message", (message) => {
  if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
  if (args[0].toLowerCase() === prefix + "hola") {
      let answers = ["ey baby! ", "Hola, espero que traigas un salchichón para mí :yum: ", "Hola! podrías ayudarme a elegir un objeto para un talismán! tú tienes 
buen gusto, siempre estás bonita!", "Hola! has dormido bien? tienes los ojos tan hundidos que podría encajar huevos de Boltue", "Toma un té con vitaminas para aguantar el día ¿ok?", "Voy llegando tarde!! me quedé explorando en la misión", "Has visto mi kit de navegacion?"]
    message.reply(answers[Math.floor(Math.random() * answers.length)]);  
  }
  if (message.content.startsWith("Chrome, y Karenn?")) {
    message.channel.send("p-porque preguntas por ella tan de pronto?");
  }
     if (message.content.startsWith("Chrome perrito")) {
    message.reply("No soy un perro!! soy un Hombre lobo!! UN HOMBRE LOBO :rage: ");
  }
  if (message.content === prefix + "pre") {
    message.channel.send("<@&635788170599989268> Preparaos, atacamos en unos minutos");
  }
  if (message.content === prefix + "ata") {
    message.channel.send("<@&635788170599989268> Atacamos con minis, gruta y/o episodio. No olvides confirmar el ataque a continuación");
  }
});
bot.login(process.env.token);       


 
     
       
     
