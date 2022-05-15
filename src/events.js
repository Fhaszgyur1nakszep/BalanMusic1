player.on('error', (queue, error) => {
    console.log(`Hiba a következő sorból: ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Hiba a ${error.message} kapcsolatból`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Elkezdtem játszani a ${track.title} fájlt itt: **<#${queue.connection.channel.id}>** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`${track.title} szám hozzáadva a várólistához ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Manuálisan lekapcsolódtam a hangcsatornáról, sor törlése... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Senki sincs a hangcsatornában, elhagyja a hangcsatornát... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Befejeztem a teljes sor elolvasását ✅');
});