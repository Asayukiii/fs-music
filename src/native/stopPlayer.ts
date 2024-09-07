import { NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$stopPlayer",
    version: "1.0.0",
    description: "Stop and destroy the current music player.",
    unwrap: false,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        player._destroy()

        return this.success()
    }
})