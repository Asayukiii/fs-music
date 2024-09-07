import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { Filter, PluginName } from "@aoijs/aoi.music"
import { AudioFilters } from "./addFilter"

export default new NativeFunction({
    name: "$removeFilter",
    description: "Removes the given filter from the player.",
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
        }
    ],
    async execute(ctx, [name]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        if (!ctx.client.music.manager.plugins.has(PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }

        const filter = <Filter>ctx.client.music.manager.plugins.get(PluginName.Filter)
        filter.remove(name, player)

        return this.success()
    }
})