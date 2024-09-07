"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerType = void 0;
const discord_js_1 = require("discord.js");
const forgescript_1 = require("@tryforge/forgescript");
var AudioPlayerType;
(function (AudioPlayerType) {
    AudioPlayerType["Bidirectional"] = "bidirectional";
    AudioPlayerType["Default"] = "default";
    AudioPlayerType["FOnly"] = "fonly";
})(AudioPlayerType || (exports.AudioPlayerType = AudioPlayerType = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$joinVoiceChannel",
    description: "Joins a voice channel by ID.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Channel ID",
            description: "The voice channel ID to connect to.",
            type: forgescript_1.ArgType.Channel,
            check: (c) => c.isVoiceBased(),
            required: true,
            rest: false
        },
        {
            name: "Text ID",
            description: "Text channel ID to attach the messages to.",
            type: forgescript_1.ArgType.Channel,
            check: (c) => c.isTextBased(),
            required: false,
            rest: false
        },
        {
            name: "Self Deaf",
            description: "Whether automatically deaf the bot when it joins the channel.",
            type: forgescript_1.ArgType.Boolean,
            required: false,
            rest: false
        },
        {
            name: "Self Mute",
            description: "Whether automatically mute the bot when it joins the channel.",
            type: forgescript_1.ArgType.Boolean,
            required: false,
            rest: false
        },
        {
            name: "Speaker",
            description: "Whether the client should be used as speaker in stage voice channels.",
            type: forgescript_1.ArgType.Boolean,
            required: false,
            rest: false
        },
        {
            name: "Player Type",
            description: "The type of the audio player.",
            type: forgescript_1.ArgType.Enum,
            required: false,
            rest: false,
            enum: AudioPlayerType
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [voiceChannel, textChannel, deaf, mute, speaker, type]) {
        const vchannel = voiceChannel;
        const tchannel = textChannel;
        const connected = await ctx.client.music.joinVc({
            voiceChannel: vchannel,
            textChannel: tchannel ?? ctx.channel,
            selfDeaf: deaf ?? true,
            selfMute: mute ?? false,
            type: type
        }).catch(e => {
            if (ctx.client.music.logErrors)
                forgescript_1.Logger.error(e);
            return false;
        });
        if (connected && speaker && vchannel.type === discord_js_1.ChannelType.GuildStageVoice) {
            await ctx.guild?.members.me?.voice.setSuppressed(false);
        }
        return this.success(connected);
    }
});
