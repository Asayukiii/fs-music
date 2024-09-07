module.exports = {
    type: 'trackEnd',
    code: `
        $!sendMessage[$channelID;
            $title[A track ended playing]
            $footer[$guildName;$guildIcon]
            $timestamp
            $color[FFFFFF]
        ]
    `
}