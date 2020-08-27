const { Command } = require('Nasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Resumes the current song.'
    });
  }

  async run(message) {
    if (message.guild.music.idling) throw 'The queue is empty! Give something to play first!';
    if (message.guild.music.playing) throw 'Is this song too silent? Because there is already a song playing ...';

    message.guild.music.resume();

    return message.send('▶ Resumed');
  }
};