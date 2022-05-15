module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        message.author.send(`Mentette a következő számot: ${queue.current.title} | ${queue.current.author} a szerverről ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Privát üzenetben elküldtem a zene címét ✅`);
        }).catch(error => {
            message.channel.send(`nem tudok privát üzenetet küldeni ${message.author}... próbálja újra? ❌`);
        });
    },
};