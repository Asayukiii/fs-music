"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$skipTo",
    description: "Skips tracks to given position.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Position",
            description: "The position of the target track.",
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false,
        }
    ],
    async execute(ctx, [position]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        player.skipTo(position);
        return this.success();
    }
});
