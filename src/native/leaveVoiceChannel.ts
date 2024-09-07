import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$leaveVoiceChannel",
    description: "Leaves the voice channel the bot is connected to.",
    unwrap: true,
    brackets: false,
    version: "1.0.0",
    args: [
        {
            name: "Guild ID",
            description: "The guild ID where the channel is in.",
            type: ArgType.Guild,
            required: false,
            rest: false
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild]) {
        const player = ctx.client.music.manager.players.get(guild?.id ?? ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        ctx.client.music.manager.leaveVc(guild?.id ?? ctx.guild!.id)

        return this.success()
    }
})