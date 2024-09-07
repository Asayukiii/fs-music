import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { PlatformType, search } from "@aoijs/aoi.music"

export default new NativeFunction({
    name: "$playTrack",
    description: "Searches and play a track by query.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Query",
            description: "Query to search the track with.",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "Source",
            description: "Source to search this track on.",
            type: ArgType.Enum,
            required: true,
            rest: false,
            enum: PlatformType
        }
    ],
    output: ArgType.Number,
    async execute(ctx, [query, type]) {
        let tracks: string[] = []
        let trackType: number

        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        switch (type) {
            case PlatformType.Youtube: {
                tracks = await search(query, PlatformType.Youtube, ctx.client.music.manager)
                trackType = PlatformType.Youtube
                break
            }
            case PlatformType.SoundCloud: {
                tracks = await search(query, PlatformType.SoundCloud, ctx.client.music.manager)
                trackType = PlatformType.SoundCloud
                break
            }
            case PlatformType.Spotify: {
                tracks = await search(query, PlatformType.Spotify, ctx.client.music.manager)
                trackType = PlatformType.Spotify
                break
            }
            case PlatformType.LocalFile: {
                tracks = await search(query, PlatformType.LocalFile, ctx.client.music.manager)
                trackType = PlatformType.LocalFile
                break
            }
            case PlatformType.Url: {
                tracks = await search(query, PlatformType.Url, ctx.client.music.manager)
                trackType = PlatformType.Url
                break
            }
        }

        if (tracks.length > 0) await player.add(tracks, trackType, ctx.member!);
        
        return this.success(trackType)
    }
})