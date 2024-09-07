import { NativeFunction } from "@tryforge/forgescript"
import { Filter, PluginName } from "@aoijs/aoi.music"

export default new NativeFunction({
    name: "$removeAllFilters",
    description: "Removes all filters from the player.",
    unwrap: false,
    version: "1.0.0",
    async execute(ctx) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        if (!ctx.client.music.manager.plugins.has(PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }

        const filter = <Filter>ctx.client.music.manager.plugins.get(PluginName.Filter)
        filter.removeAll(player)

        return this.success()
    }
})