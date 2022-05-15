module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Jelenleg nincs zene lejátszása... próbálja újra? ❌`, ephemeral: true, components: [] });

            int.member.send(`Mentette a következő számot: ${queue.current.title} | ${queue.current.author} a szerverről ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Privát üzenetben elküldtem a zene címét ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Nem tudok privát üzenetet küldeni... próbálja újra? ❌`, ephemeral: true, components: [] });
            });
        }
    }
};