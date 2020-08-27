const { MessageEmbed } = require('discord.js');
const { Command } = require('Nasa');
const { color } = require('../../../config.json');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'do',
      cooldown: 60,
      guarded: true,
      permissionLevel: 0,
      description: 'do the issei',
      extendedHelp: 'Simply do ||do'
    });
  }

  async run(message) {
    const description = 'And I oop-';
    const image = 'https://thumbs.gfycat.com/BleakCreamyAlpineroadguidetigerbeetle-size_restricted.gif';

    return message.send(new MessageEmbed()
      .setColor(color)
      .setDescription(description)
      .setImage(image));
  }
};