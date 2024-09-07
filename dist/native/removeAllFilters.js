"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const aoi_music_1 = require("@aoijs/aoi.music");
exports.default = new forgescript_1.NativeFunction({
    name: "$removeAllFilters",
    description: "Removes all filters from the player.",
    unwrap: false,
    version: "1.0.0",
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        if (!ctx.client.music.manager.plugins.has(aoi_music_1.PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }
        const filter = ctx.client.music.manager.plugins.get(aoi_music_1.PluginName.Filter);
        filter.removeAll(player);
        return this.success();
    }
});
