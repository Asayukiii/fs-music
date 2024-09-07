import { BaseChannel, ChannelType, GuildTextBasedChannel, VoiceBasedChannel } from "discord.js"
import { ArgType, Logger, NativeFunction } from "@tryforge/forgescript"

export enum AudioPlayerType {
    Bidirectional = "bidirectional",
    Default = "default",
    FOnly = "fonly"
}

export default new NativeFunction({
    name: "$joinVoiceChannel",
    description: "Joins a voice channel by ID.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Channel ID",
            description: "The voice channel ID to connect to.",
            type: ArgType.Channel,
            check: (c: BaseChannel) => c.isVoiceBased(),
            required: true,
            rest: false
        },
        {
            name: "Text ID",
            description: "Text channel ID to attach the messages to.",
            type: ArgType.Channel,
            check: (c: BaseChannel) => c.isTextBased(),
            required: false,
            rest: false
        },
        {
            name: "Self Deaf",
            description: "Whether automatically deaf the bot when it joins the channel.",
            type: ArgType.Boolean,
            required: false,
            rest: false
        },
        {
            name: "Self Mute",
            description: "Whether automatically mute the bot when it joins the channel.",
            type: ArgType.Boolean,
            required: false,
            rest: false
        },
        {
            name: "Speaker",
            description: "Whether the client should be used as speaker in stage voice channels.",
            type: ArgType.Boolean,
            required: false,
            rest: false
        },
        {
            name: "Player Type",
            description: "The type of the audio player.",
            type: ArgType.Enum,
            required: false,
            rest: false,
            enum: AudioPlayerType
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [voiceChannel, textChannel, deaf, mute, speaker, type]) {
        const vchannel = <VoiceBasedChannel>voiceChannel;
        const tchannel = <GuildTextBasedChannel>textChannel;

        const connected = await ctx.client.music.joinVc({
            voiceChannel: vchannel,
            textChannel: tchannel ?? ctx.channel as any,
            selfDeaf: deaf ?? true,
            selfMute: mute ?? false,
            type: type as any
        }).catch(e => {
            if (ctx.client.music.logErrors) Logger.error(e);
            return false
        });

        if (connected && speaker && vchannel.type === ChannelType.GuildStageVoice) {
            await ctx.guild?.members.me?.voice.setSuppressed(false);
        }

        return this.success(connected)
    }
})