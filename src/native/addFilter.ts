import { CustomFilters, Filter, PluginName } from "@aoijs/aoi.music"
import { ArgType, NativeFunction } from "@tryforge/forgescript"

/**
 * Represents a music player filter.
 */
export interface AoiFilter {
    filter: string
    value: string
}

/**
 * List of supported audio filters.
 */
export enum AudioFilters {
    NightCore = "nightCore",
    BassBoost = "bassBoost",
    EightD = "8D",
    Pitch = "pitch",
    Karaoke = "karaoke",
    Slowed = "slowed",
    Deep = "deep",
    TrebleBoost = "trebleBoost",
    Gate = "gate",
    Vibrato = "vibrato",
    Flanger = "flanger",
    Phaser = "phaser"
}

export default new NativeFunction({
    name: "$addFilter",
    description: "Applies a filter to the player.",
    unwrap: true,
    brackets: true,
    version: "1.0.0",
    args: [
        {
            name: "Name",
            description: "The name of the filter.",
            type: ArgType.Enum,
            required: true,
            rest: false,
            enum: AudioFilters,
        },
        {
            name: "Amount",
            description: "The amount to be applied of this filter.",
            type: ArgType.Number,
            required: true,
            rest: false
        }
    ],
    async execute(ctx, [name, amount]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        if (!ctx.client.music.manager.plugins.has(PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }

        const filter = <Filter>ctx.client.music.manager.plugins.get(PluginName.Filter)
        const filters = CustomFilters as Record<string, any>
        if (!filters[name]) return this.customError("Invalid filter name provided!");

        const got = filters[name](amount) as AoiFilter
        filter.add([got], player)

        return this.success()
    }
})