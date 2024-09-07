"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const aoi_music_1 = require("@aoijs/aoi.music");
exports.default = new forgescript_1.NativeFunction({
    name: "$playTrack",
    description: "Searches and play a track by query.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Query",
            description: "Query to search the track with.",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "Source",
            description: "Source to search this track on.",
            type: forgescript_1.ArgType.Enum,
            required: true,
            rest: false,
            enum: aoi_music_1.PlatformType
        }
    ],
    output: forgescript_1.ArgType.Number,
    async execute(ctx, [query, type]) {
        let tracks = [];
        let trackType;
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        switch (type) {
            case aoi_music_1.PlatformType.Youtube: {
                tracks = await (0, aoi_music_1.search)(query, aoi_music_1.PlatformType.Youtube, ctx.client.music.manager);
                trackType = aoi_music_1.PlatformType.Youtube;
                break;
            }
            case aoi_music_1.PlatformType.SoundCloud: {
                tracks = await (0, aoi_music_1.search)(query, aoi_music_1.PlatformType.SoundCloud, ctx.client.music.manager);
                trackType = aoi_music_1.PlatformType.SoundCloud;
                break;
            }
            case aoi_music_1.PlatformType.Spotify: {
                tracks = await (0, aoi_music_1.search)(query, aoi_music_1.PlatformType.Spotify, ctx.client.music.manager);
                trackType = aoi_music_1.PlatformType.Spotify;
                break;
            }
            case aoi_music_1.PlatformType.LocalFile: {
                tracks = await (0, aoi_music_1.search)(query, aoi_music_1.PlatformType.LocalFile, ctx.client.music.manager);
                trackType = aoi_music_1.PlatformType.LocalFile;
                break;
            }
            case aoi_music_1.PlatformType.Url: {
                tracks = await (0, aoi_music_1.search)(query, aoi_music_1.PlatformType.Url, ctx.client.music.manager);
                trackType = aoi_music_1.PlatformType.Url;
                break;
            }
        }
        if (tracks.length > 0)
            await player.add(tracks, trackType, ctx.member);
        return this.success(trackType);
    }
});
