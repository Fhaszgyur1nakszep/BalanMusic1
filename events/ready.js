module.exports = async (client) => {
    console.log(`Bejelentkezve a ${client.user.username} kliensbe\n-> Készen áll a ${client.guilds.cache.size} szervereken összesen ${client.users.cache.size} felhasználó számára`);

    client.user.setActivity(client.config.app.playing);
};