var { Cacher, ErisaVoice, Filter, PlayerEvents, PluginName } = require('../dist')
var { ForgeClient } = require('@tryforge/forgescript')

var clientVoice = new ErisaVoice({
    events: [
        PlayerEvents.AudioError,
        PlayerEvents.TrackAdd,
        PlayerEvents.TrackEnd,
        PlayerEvents.TrackStart
    ],
    manager: {
        requestOptions: {
            offsetTimeout: 0,
            soundcloudLikeTrackLimit: 200
        },
        searchOptions: {
            youtubeClient: 'TV_EMBEDDED',
            youtubeAuth: true
        }
    },
    plugins: [
        [PluginName.Cacher, new Cacher('memory')],
        [PluginName.Filter, new Filter({ filterFromStart: false })]
    ]
})

var client = new ForgeClient({
    commands: './__test__/commands',
    events: [
        'interactionCreate',
        'messageCreate',
        'ready'
    ],
    extensions: [
        clientVoice
    ],
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent',
        'GuildVoiceStates',
    ],
    prefixes: [
        'uwu.'
    ],
    token: process.env.TOKEN
})

clientVoice.commands.load('./__test__/voice')

client.login()