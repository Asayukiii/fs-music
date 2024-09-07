import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$getVolume",
    description: "Get the volume of the music player.",
    unwrap: true,
    version: "1.0.0",
    output: ArgType.Number,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        return this.success(player.volume)
    }
})