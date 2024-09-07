"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setVolume",
    description: "Set the volume of the music player.",
    unwrap: true,
    version: "1.0.0",
    args: [
        {
            name: "Amount",
            description: "Amount to be applied.",
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.Number,
    async execute(ctx, [amount]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        return this.success(player.volume = amount);
    }
});
