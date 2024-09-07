import { NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$skipTrack",
    description: "Skips the current track.",
    version: "1.0.0",
    unwrap: false,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        player.skip()

        return this.success()
    }
})