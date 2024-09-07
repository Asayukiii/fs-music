"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$queueLength",
    description: "Returns the length of the music player queue.",
    version: "1.0.0",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        return this.success(player.queue.length ?? 0);
    }
});