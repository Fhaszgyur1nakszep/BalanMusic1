const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Először le kell tiltania az aktuális zenét a ciklus módban (${client.config.app.px}loop) ${message.author}... try again ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Ismétlési mód **${queue.repeatMode === 0 ? 'letiltve' : 'engedélyezve'}** az egész sor a végtelenségig ismétlődik 🔁` : `Valami hiba történt ${message.author}... próbálja újra? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Először le kell tiltania az aktuális sort ciklus módban (${client.config.app.px}loop queue) ${message.author}... próbálja újra? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Ismétlési mód **${queue.repeatMode === 0 ? 'letiltve' : 'engedélyezve'}** az aktuális zene a végtelenségig ismétlődik  🔂` : `Valami hiba történt ${message.author}... próbáld újra? ❌`);
        };
    },
};