module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Az aktuális zene ${queue.current.title} folytatása ✅` : `Valami hiba történt ${message.author}... próbálja újra? ❌`);
    },
};