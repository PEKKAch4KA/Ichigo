const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "erokitsune",
  category: "NSFW",
  usage: "",
  run: async (client, message, args) => {

  var errMessage = "Это не 18+ текстовый канал";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.eroKitsune());

        const eroKitsune = new Discord.MessageEmbed()
        .setTitle("Erotic Kitsune")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(eroKitsune);

}

      work();
}
                };