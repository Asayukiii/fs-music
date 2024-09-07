import { NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$playPreviousTrack",
    description: "Plays the previous track.",
    version: "1.0.0",
    unwrap: false,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        player.skip()

        return this.success()
    }
})