import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$queue",
    description: "Maps a text based on the player queue.",
    unwrap: true,
    brackets: false,
    version: "1.0.0",
    args: [
        {
            name: "Page",
            description: "The queue page.",
            type: ArgType.Number,
            required: false,
            rest: false
        },
        {
            name: "Limit",
            description: "Maximum amount of pages.",
            type: ArgType.Number,
            required: false,
            rest: false
        },
        {
            name: "Text",
            description: "Text to be mapped between pages.",
            type: ArgType.String,
            required: false,
            rest: false
        },
        {
            name: "Separator",
            description: "The text separator.",
            type: ArgType.String,
            required: false,
            rest: false
        }
    ],
    output: ArgType.String,
    async execute(ctx, [page, limit, text, separator]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");
        
        page ??= 1, limit ??= 10, separator ??= ",";
        text ??= "{position} {title} | {requester.user.tag}";

        return this.success(player.getQueue(page, limit, text).join(separator))
    }
})