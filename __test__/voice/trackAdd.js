module.exports = {
    type: 'trackAdd',
    code: `
        $!sendMessage[$channelID;
            $title[A track has been added to the queue;;0]
            $footer[$guildName;$guildIcon;0]
            $timestamp[;0]
            $color[FFFFFF;0]
            $if[$queueLength>1;
                $arrayLoad[texts;-uwu-;$queue[1;10;{position}.- **{title}**: requested by \`{requester.user.username}\`;-uwu-]]
                $!arrayShift[texts]
                $title[Queue;;1]
                $description[$arrayJoin[texts;\n];1]
                $footer[🎵 Playing now: $songInfo[title];;1]
                $color[Green;1]
            ]
        ]
    `
}