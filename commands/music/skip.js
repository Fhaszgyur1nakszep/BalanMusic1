module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Az aktuális zene ${queue.current.title} kihagyva ✅` : `Valami hiba történt ${message.author}... próbálja újra? ❌`);
    },
};