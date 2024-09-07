"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aoi_music_1 = require("@aoijs/aoi.music");
const forgescript_1 = require("@tryforge/forgescript");
const addFilter_1 = require("./addFilter");
exports.default = new forgescript_1.NativeFunction({
    name: "$setFilter",
    description: "Overwrites the configuration of a filter.",
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
        },
        {
            name: "Amount",
            description: "The amount to be applied of this filter.",
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        }
    ],
    async execute(ctx, [name, amount]) {
        const player = ctx.client.music.manager.players.get(ctx.guild.id);
        if (!player)
            return this.customError("Music player not found.");
        if (!ctx.client.music.manager.plugins.has(aoi_music_1.PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }
        const filter = ctx.client.music.manager.plugins.get(aoi_music_1.PluginName.Filter);
        const filters = aoi_music_1.CustomFilters;
        if (!filters[name])
            return this.customError("Invalid filter name provided!");
        const got = filters[name](amount);
        filter.set([got], player);
        return this.success();
    }
});
