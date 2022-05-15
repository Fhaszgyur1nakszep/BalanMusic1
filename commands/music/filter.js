module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Jelenleg nincs zene lejátszása ${message.author}... próbálja újra? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Adjon meg egy érvényes szűrőt a ${message.author} engedélyezéséhez vagy letiltásához... próbálja újra? ❌\n${actualFilter ? `A jelenleg aktív ${actualFilter} szűrése (${client.config.app.px}a letiltásához szűrő ${actualFilter}).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Ez a szűrő nem létezik ${message.author}... próbáld újra ? ❌\n${actualFilter ? `A szűrő jelenleg aktív ${actualFilter}.\n` : ''}List of available filters ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`A ${filter} szűrő mostantól **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Emlékeztető, minél hosszabb a zene, ez annál tovább tart.*`);
    },
};