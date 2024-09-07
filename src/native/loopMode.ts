import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { LoopMode } from "@aoijs/aoi.music"

export default new NativeFunction({
    name: "$loopMode",
    description: "Enables/disables a loop mode in the music player.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Mode",
            description: "The name of the loop mode.",
            type: ArgType.Enum,
            required: true,
            rest: false,
            enum: LoopMode,
        }
    ],
    output: LoopMode,
    async execute(ctx, [mode]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        return this.success(player.loop = mode)
    }
})