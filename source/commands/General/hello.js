/* eslint-disable */
const { Command } = require('Nasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'hello',
      enabled: true,
      hidden: true,
      runIn: ['text', 'dm'],
      cooldown: 0,
      deletable: false,
      bucket: 1,
      aliases: ['hi', 'hey'],
      guarded: false,
      nsfw: false,
      permissionLevel: 10,
      requiredPermissions: [],
      requiredSettings: [],
      subcommands: false,
      description: 'Say hello to Issei Hyoudou!',
      quotedStringSupport: false,
      usage: '',
      usageDelim: undefined,
      extendedHelp: ''
    });
  }

  async run(message) {
    return message.send('Hello!');
  }
};