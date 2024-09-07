import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setVolume",
    description: "Set the volume of the music player.",
    unwrap: true,
    version: "1.0.0",
    args: [
        {
            name: "Amount",
            description: "Amount to be applied.",
            type: ArgType.Number,
            required: true,
            rest: false
        }
    ],
    output: ArgType.Number,
    async execute(ctx, [amount]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        return this.success(player.volume = amount)
    }
})