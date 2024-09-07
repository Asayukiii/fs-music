"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const aoi_music_1 = require("@aoijs/aoi.music");
exports.default = new forgescript_1.NativeFunction({
    name: "$autoPlay",
    description: "Stars a player automatically.",
    unwrap: true,
    brackets: false,
    version: "1.0.0",
    args: [
        {
            name: "Type",
            description: "The source type.",
            type: forgescript_1.ArgType.Enum,
            required: false,
            rest: false,
            enum: aoi_music_1.AutoPlay
        }
    ],
    output: aoi_music_1.AutoPlay,
    async execute(ctx, [source]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        return this.success(player.autoPlay = source);
    }
});
