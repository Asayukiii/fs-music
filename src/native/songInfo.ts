import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$songInfo",
    description: "Returns the information of a song.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Property",
            description: "The song information property name.",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "Position",
            description: "The position of the song to get the information from.",
            type: ArgType.Number,
            required: false,
            rest: false
        }
    ],
    output: [ArgType.String, ArgType.Unknown],
    async execute(ctx, [property, position]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");
        if (!player.queue.length) return this.customError("There aren't any songs to retrieve.");

        position ??= player.currentPosition();
        const song = player.queue.at(position);
        if (!song) return this.customError("Unable to get the song at index " + position);

        return this.success((<Record<string, any>>song)[property])
    }
})