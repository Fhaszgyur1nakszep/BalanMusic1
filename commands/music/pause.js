module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Az aktuális zene ${queue.current.title} szüneteltetve ✅` : `Valami hiba történt ${message.author}... próbálja újra? ❌`);
    },
};