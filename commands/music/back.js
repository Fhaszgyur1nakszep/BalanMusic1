module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author} előtt nem volt zenelejátszás... próbáld újra? ❌`);

        await queue.back();

        message.channel.send(`Az **previous** szám lejátszása ✅`);
    },
};