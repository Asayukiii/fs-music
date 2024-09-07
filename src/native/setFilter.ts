import { CustomFilters, Filter, PluginName } from "@aoijs/aoi.music"
import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { AoiFilter, AudioFilters } from "./addFilter"

export default new NativeFunction({
    name: "$setFilter",
    description: "Overwrites the configuration of a filter.",
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
        filter.set([got], player)

        return this.success()
    }
})