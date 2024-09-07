"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$queue",
    description: "Maps a text based on the player queue.",
    unwrap: true,
    brackets: false,
    version: "1.0.0",
    args: [
        {
            name: "Page",
            description: "The queue page.",
            type: forgescript_1.ArgType.Number,
            required: false,
            rest: false
        },
        {
            name: "Limit",
            description: "Maximum amount of pages.",
            type: forgescript_1.ArgType.Number,
            required: false,
            rest: false
        },
        {
            name: "Text",
            description: "Text to be mapped between pages.",
            type: forgescript_1.ArgType.String,
            required: false,
            rest: false
        },
        {
            name: "Separator",
            description: "The text separator.",
            type: forgescript_1.ArgType.String,
            required: false,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.String,
    async execute(ctx, [page, limit, text, separator]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        page ?? (page = 1), limit ?? (limit = 10), separator ?? (separator = ",");
        text ?? (text = "{position} {title} | {requester.user.tag}");
        return this.success(player.getQueue(page, limit, text).join(separator));
    }
});
