const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`A jelenlegi kötet ${queue.volume} 🔊\n*A kötet módosításához írjon be egy érvényes számot **1** és **${maxVol}** között.*`);

        if (queue.volume === vol) return message.channel.send(`A módosítani kívánt kötet már a jelenlegi ${message.author}... próbálja újra? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`A megadott szám nem érvényes. Adjon meg egy **1** és **${maxVol}** közötti számot ${message.author}... próbálja újra? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `A kötet a következőre módosult: **${vol}**/**${maxVol}**% 🔊` : `Valami hiba történt ${message.author}... próbálja újra? ❌`);
    },
};