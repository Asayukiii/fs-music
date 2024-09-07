"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$clearQueue",
    description: "Clears the music player queue.",
    version: "1.0.0",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        let notEmpty = player.queue.length > 0;
        if (notEmpty)
            player.queue.length = 0;
        return this.success(notEmpty);
    }
});
