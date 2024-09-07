"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$playerStatus",
    version: "1.0.0",
    description: "Returns the status of the music player.",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        return this.success(player.player.state.status);
    }
});
