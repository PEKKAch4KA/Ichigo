const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "kiss",
  category: "Действия",
  description: "РП команда. Поцеловать",
  usage: "",
  run: async (client, message, args) => {


        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Упомяните кого-нибудь поцеловать');

        async function work() {
        let owo = (await neko.sfw.kiss());

        const kissembed = new Discord.MessageEmbed()
        .setDescription((message.author.toString() + " поцеловал(-а) " + user.toString()))
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(kissembed);

}

      work();
}
                };