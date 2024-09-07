import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$skipTo",
    description: "Skips tracks to given position.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Position",
            description: "The position of the target track.",
            type: ArgType.Number,
            required: true,
            rest: false,
        }
    ],
    async execute(ctx, [position]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        player.skipTo(position)

        return this.success()
    }
})