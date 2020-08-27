const { Command } = require('Nasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'ban',
      permissionLevel: 6,
      requiredPermissions: ['BAN_MEMBERS'],
      runIn: ['text'],
      description: 'Bans a userToBan in your server.',
      usage: '<userToBan:userToBan> [reason:...string]',
      usageDelim: ' ',
      extendedHelp: 'Simply do ||ban <userToBan> to ban that user. You can also do ||ban <userToBan> [reason] to give a reason why you banned them.'
    });

    this.customizeResponse('userToBan',
    'You need to give me someone to ban.'
    );
  }

  async run(msg, [userToBan, reason]) {
    if (userToBan.id === msg.author.id) throw 'Why do you want to ban yourself?';
    if (userToBan.id === this.client.userToBan.id) throw 'Have I been a bad bot?';

    const member = await msg.guild.members.fetch(userToBan).catch(() => null);
    if (member) {
      if (member.roles.highest.position >= msg.member.roles.highest.position) throw 'You can\'t ban this person.';
      if (!member.bannable) throw 'I can\'t ban this person.';
    }

    const options = {};
    if (reason) options.reason = reason;

    await msg.guild.members.ban(userToBan, options);

    return msg.sendMessage(`${member.userToBan.tag} got banned ${reason ? `for ${reason}` : 'for reasons ;).'}`);
  }

};