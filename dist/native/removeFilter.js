"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const aoi_music_1 = require("@aoijs/aoi.music");
const addFilter_1 = require("./addFilter");
exports.default = new forgescript_1.NativeFunction({
    name: "$removeFilter",
    description: "Removes the given filter from the player.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Name",
            description: "The name of the filter.",
            type: forgescript_1.ArgType.Enum,
            required: true,
            rest: false,
            enum: addFilter_1.AudioFilters,
        }
    ],
    async execute(ctx, [name]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        if (!ctx.client.music.manager.plugins.has(aoi_music_1.PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }
        const filter = ctx.client.music.manager.plugins.get(aoi_music_1.PluginName.Filter);
        filter.remove(name, player);
        return this.success();
    }
});
