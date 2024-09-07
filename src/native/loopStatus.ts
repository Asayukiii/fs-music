import { NativeFunction } from "@tryforge/forgescript"
import { LoopMode } from "@aoijs/aoi.music"

export default new NativeFunction({
    name: "$loopStatus",
    description: "Returns the loop status of the music player.",
    version: "1.0.0",
    unwrap: false,
    output: LoopMode,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        return this.success(player.loop)
    }
})