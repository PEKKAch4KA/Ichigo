const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');


module.exports = {
    name: "cattext",
    category: "Fun",
  description: "Красивый текстовый эмодзи. Пример: (●ↀωↀ●)",
  usage: "[cattext]",
  run: async (client, message, args) => {


    async function work() {

        let owo = (await neko.sfw.catText());
        message.channel.send(owo.cat).catch(error => {
            console.error(error);
        });

      }

      work();
  }
  };