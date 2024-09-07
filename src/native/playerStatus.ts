import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$playerStatus",
    version: "1.0.0",
    description: "Returns the status of the music player.",
    unwrap: false,
    output: ArgType.String,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        return this.success(player.player.state.status)
    }
})