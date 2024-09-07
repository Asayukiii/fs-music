import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$hasPlayer",
    description: "Returns whether the current guild has a music player created.",
    version: "1.0.0",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(ctx.client.music.manager.players.has(ctx.guild!.id))
    }
})