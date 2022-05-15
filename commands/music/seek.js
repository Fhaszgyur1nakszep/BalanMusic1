const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`A jelzett idő nagyobb, mint az aktuális dal ${message.author} teljes ideje... próbáld újra? ❌\n*Próbáljon ki például egy érvényes időt, például **5s, 10s, 20mp, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Az aktuális dalnál beállított idő **${ms(timeToMS, { long: true })}** ✅`);
    },
};