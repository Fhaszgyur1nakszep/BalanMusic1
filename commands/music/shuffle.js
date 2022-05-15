module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Nincs zene a sorban a jelenlegi ${message.author} után... próbálja újra? ❌`);

        await queue.shuffle();

        return message.channel.send(`Sor keverve **${queue.tracks.length}** dal(ok) ! ✅`);
    },
};