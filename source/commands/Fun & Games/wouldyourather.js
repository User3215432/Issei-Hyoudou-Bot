const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
const { Command } = require('Nasa');
const request = require('request-promise');
const { color } = require('../../../config.json');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'wouldyourather',
      cooldown: 60,
      aliases: ['wouldyourather', 'either', 'rather', 'wyr'],
      guarded: true,
      description: 'Get Issei Hyoudou to ask a \'Would you rather?\' question.',
      extendedHelp: 'Simply do ||wyr'
    });
  }

  async run(message) {
    const choice = Math.floor((Math.random() * 483514) + 0);
    const url = 'http://www.either.io/';
    const thumbnail = 'https://pbs.twimg.com/profile_images/1729848996/yr-twitter_400x400.png';
    const title = 'Either.io';
    const author = 'Would you rather?';
    const link = url + choice;
    const display = new MessageEmbed()
      .setTitle(title)
      .setAuthor(author)
      .setColor(color)
      .setURL(link)
      .setThumbnail(thumbnail)
      .setFooter('© Either.io');

    await request(link)
      .then(html => {
        const $ = cheerio.load(html);
        const optionA = $('.panel').find('.result-1').first().children('.option-text').text();
        const optionB = $('.panel').find('.result-2').first().children('.option-text').text();
        const info = $('.more-info').text();

        display.setDescription(`**Either...**\nA) ${optionA} 🔵\n\n__**OR**__\n\nB) ${optionB} 🔴\n${info}`);

      })
      .catch(error => {
        if (error.statusCode === 403) throw message.send('Either.io is down, try again later.');
        if (error.statusCode === 404) throw message.send('I had some trouble finding a good question, please try again.');

        throw message.send(message.language.get('COMMAND_ERROR_UPDATE', message));
      });

    const reply = await message.send(display);
    await reply.react('🔵');
    await reply.react('🔴');

    return null;
  }
}