module.exports = {
    name: 'play',
    aliases: ['p'],
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

        $c[Checking if song query was provided.]
        $if[$message==;
            $!sendMessage[$channelID;
                $title[Missing Argument!]
                $description[You must provide a song name.]
                $footer[$guildName;$guildIcon]
                $timestamp
                $color[FF0000]
            ]
            $stop
        ]

        $try[
            $c[Connecting to the voice channel.]
            $if[$and[$voiceID[$guildID;$clientID]==;$hasPlayer==false];
                $let[connected;$joinVoiceChannel[$voiceID[$guildID;$authorID];$channelID]]
            ]

            $c[Play the track, searching by query.]
            $if[$get[connected]==true;
                $sendMessage[$channelID;
                    $title[Connected!]
                    $description[I am connected to <#$voiceID[$guildID;$clientID]>.]
                    $footer[$guildName;$guildIcon]
                    $timestamp
                    $color[Green]
                ]

                $c[Handle track searching by query.]
                $ifx[
                    $if[$checkContains[$message;soundcloud.com;snd.sc;soundcloud.app];
                        $!playTrack[$message;SoundCloud]
                    ]
                    $elseif[$checkContains[$message;open.spotify.com];
                        $!playTrack[$message;Spotify]
                    ]
                    $else[
                        $!playTrack[$message;Youtube]
                    ]
                ]
            ;
                $c[Handle "false" connected code.]
                $if[$get[connected]==false;
                    $!sendMessage[$channelID;
                        $title[Cannot connect!]
                        $description[I was unable to connect to the voice channel.]
                        $footer[$guildName;$guildIcon]
                        $timestamp
                        $color[FF0000]
                    ]
                ]

                $c[Add tracks to the player if this guild has one.]
                $if[$hasPlayer;
                    $c[Handle track searching by query.]
                    $ifx[
                        $if[$checkContains[$message;soundcloud.com;snd.sc;soundcloud.app];
                            $!playTrack[$message;SoundCloud]
                        ]
                        $elseif[$checkContains[$message;open.spotify.com];
                            $!playTrack[$message;Spotify]
                        ]
                        $else[
                            $!playTrack[$message;Youtube]
                        ]
                    ]
                ]
            ]
        ;
            $!sendMessage[$channelID;
                $title[Something Internal Went Wrong!]
                $description[Unable to play the given track with reason:\n$env[err]]
                $footer[$guildName;$guildIcon]
                $timestamp
                $color[FF0000]
            ]
        ;err]
    `
}