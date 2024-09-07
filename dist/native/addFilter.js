"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioFilters = void 0;
const aoi_music_1 = require("@aoijs/aoi.music");
const forgescript_1 = require("@tryforge/forgescript");
/**
 * List of supported audio filters.
 */
var AudioFilters;
(function (AudioFilters) {
    AudioFilters["NightCore"] = "nightCore";
    AudioFilters["BassBoost"] = "bassBoost";
    AudioFilters["EightD"] = "8D";
    AudioFilters["Pitch"] = "pitch";
    AudioFilters["Karaoke"] = "karaoke";
    AudioFilters["Slowed"] = "slowed";
    AudioFilters["Deep"] = "deep";
    AudioFilters["TrebleBoost"] = "trebleBoost";
    AudioFilters["Gate"] = "gate";
    AudioFilters["Vibrato"] = "vibrato";
    AudioFilters["Flanger"] = "flanger";
    AudioFilters["Phaser"] = "phaser";
})(AudioFilters || (exports.AudioFilters = AudioFilters = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$addFilter",
    description: "Applies a filter to the player.",
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
            enum: AudioFilters,
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
        filter.add([got], player);
        return this.success();
    }
});
