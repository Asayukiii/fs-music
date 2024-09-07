import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$resumeTrack",
    description: "Pauses the current paused track.",
    version: "1.0.0",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        return this.success(player.resume())
    }
})