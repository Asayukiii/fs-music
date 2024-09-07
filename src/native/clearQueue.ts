import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$clearQueue",
    description: "Clears the music player queue.",
    version: "1.0.0",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        let notEmpty = player.queue.length > 0;
        if (notEmpty) player.queue.length = 0;

        return this.success(notEmpty)
    }
})