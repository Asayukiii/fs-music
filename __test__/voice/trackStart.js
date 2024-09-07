module.exports = {
    type: 'trackStart',
    code: `
        $!sendMessage[$channelID;
            $title[A track started playing...]
            $thumbnail[$songInfo[thumbnail]]
            $addField[Song Title;$songInfo[title]]
            $addField[Duration;$parseMs[$songInfo[duration]]]
            $addField[Source;$songInfo[formattedPlatforms]]
            $addField[Requester;$songInfo[requester]]
            $footer[$guildName;$guildIcon]
            $timestamp
            $color[FFFFFF]
        ]
    `,
}