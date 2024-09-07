"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const aoi_music_1 = require("@aoijs/aoi.music");
exports.default = new forgescript_1.NativeFunction({
    name: "$getFilters",
    description: "Get the names of the filters that are applied to the music player.",
    unwrap: true,
    brackets: false,
    version: "1.0.0",
    args: [
        {
            name: "Separator",
            description: "Filter name separator.",
            type: forgescript_1.ArgType.String,
            required: false,
            rest: false
        }
    ],
    output: forgescript_1.ArgType.String,
    async execute(ctx, [separator]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        if (!ctx.client.music.manager.plugins.has(aoi_music_1.PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }
        return this.success(player.filters.join(separator ?? ","));
    }
});
