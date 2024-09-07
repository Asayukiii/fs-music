import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$removeTrack",
    description: "Removes the given track by position.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Position",
            description: "The position of the track to be removed.",
            type: ArgType.Number,
            required: true,
            rest: false,
        }
    ],
    async execute(ctx, [position]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        player.removeTrack(position)

        return this.success()
    }
})