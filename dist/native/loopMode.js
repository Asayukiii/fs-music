"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const aoi_music_1 = require("@aoijs/aoi.music");
exports.default = new forgescript_1.NativeFunction({
    name: "$loopMode",
    description: "Enables/disables a loop mode in the music player.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Mode",
            description: "The name of the loop mode.",
            type: forgescript_1.ArgType.Enum,
            required: true,
            rest: false,
            enum: aoi_music_1.LoopMode,
        }
    ],
    output: aoi_music_1.LoopMode,
    async execute(ctx, [mode]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        return this.success(player.loop = mode);
    }
});
