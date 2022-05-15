const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Kiszámolva az utolsó szívverést ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ezelőtt **${client.ws.ping}ms** 🛰️`);
    },
};