module.exports = {
    app: {
        px: 'b.',
        token: 'ODk1NzI0MzU1NzcyODg3MTQx.GIK_LH.bjS255XvWpKyV5ommgbKwX7OW7b6tYqUaYQFUs',
        playing: 'BalanMusic'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
