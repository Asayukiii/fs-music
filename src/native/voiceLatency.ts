import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$voiceLatency",
    version: "1.0.0",
    description: "Returns the latency of the voice channel the bot is in.",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        return this.success(player.getPing())
    }
})