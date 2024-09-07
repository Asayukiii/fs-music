module.exports = {
    name: 'pause',
    type: 'messageCreate',
    code: `
        $c[Checking if the message author is connected to a voice channel.]
        $if[$voiceID[$guildID;$authorID]==;
            $!sendMessage[$channelID;
                $title[Action Denied!]
                $description[You must be connected to a voice channel.]
                $footer[$guildName;$guildIcon]
                $timestamp
                $color[FF0000]
            ]
            $stop
        ]

        $c[Checking if client is connected isn't connected to a channel or
        message author and client are connected in different channels.]
        $if[$and[$voiceID[$guildID;$clientID]!=;$voiceID[$guildID;$clientID]!=$voiceID[$guildID;$authorID]];
            $!sendMessage[$channelID;
                $title[Action Denied!]
                $description[You must be connected to: <#$voiceID[$guildID;$clientID]>.]
                $footer[$guildName;$guildIcon]
                $timestamp
                $color[FF0000]
            ]
            $stop
        ]

        $c[Checking if some track is being played.]
        $if[$playerStatus!=playing;
            $!sendMessage[$channelID;
                $title[Action Denied!]
                $description[Currently any track is being played.]
                $footer[$guildName;$guildIcon]
                $timestamp
                $color[FF0000]
            ]
            $stop
        ]

        $!pauseTrack
    `
}