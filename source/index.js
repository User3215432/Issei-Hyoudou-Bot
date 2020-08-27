/* eslint-disable no-undef */
/* eslint-disable no-process-env */
const { NasaClient } = require('Nasa');
const CONFIG = require('../config.json');

require('./lib/extensions/Cerasus');

NasaClient.defaultGuildSchema.add('roles', schema => {
  schema.add('muted', 'role')
});

NasaClient.defaultPermissionLevels
  .add(5, message => message.member && message.guild.settings.dj && message.member.roles.has(message.guild.settings.dj), { fetch: true })

new NasaClient({
  commandLogging: true,
  noPrefixDM: true,
  prefix: CONFIG.prefix,
  production: true,
  presence: {
    activity: {
      name: "High School DxD",
      type: "WATCHING",
      shardID: CONFIG.shardCount
    }
  },
  readyMessage: "I missed you",
  shardCount: CONFIG.shardCount,
  totalShardCount: CONFIG.shardCount,
  typing: true
}).login(process.env.TOKEN);