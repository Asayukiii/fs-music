"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const aoi_music_1 = require("@aoijs/aoi.music");
exports.default = new forgescript_1.NativeFunction({
    name: "$seek",
    description: "Seeks the position of a song.",
    unwrap: true,
    version: "1.0.0",
    args: [
        {
            name: "Time",
            description: "Time to be seeked.",
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        }
    ],
    async execute(ctx, [time]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        if (!ctx.client.music.manager.plugins.has(aoi_music_1.PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }
        const filter = ctx.client.music.manager.plugins.get(aoi_music_1.PluginName.Filter);
        filter.seek(time, player);
        return this.success();
    }
});
