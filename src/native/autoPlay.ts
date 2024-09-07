import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { AutoPlay } from "@aoijs/aoi.music"

export default new NativeFunction({
    name: "$autoPlay",
    description: "Stars a player automatically.",
    unwrap: true,
    brackets: false,
    version: "1.0.0",
    args: [
        {
            name: "Type",
            description: "The source type.",
            type: ArgType.Enum,
            required: false,
            rest: false,
            enum: AutoPlay
        }
    ],
    output: AutoPlay,
    async execute(ctx, [source]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");
        
        return this.success(player.autoPlay = source)
    }
})