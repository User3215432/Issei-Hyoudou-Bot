const { Command } = require('Nasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Leaves the voice channel.'
    });
  }

  async run(message) {
    await message.guild.music.leave();

    return message.send('Bye bye.');
  }
};