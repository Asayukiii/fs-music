import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { PluginName } from "@aoijs/aoi.music"

export default new NativeFunction({
    name: "$getFilters",
    description: "Get the names of the filters that are applied to the music player.",
    unwrap: true,
    brackets: false,
    version: "1.0.0",
    args: [
        {
            name: "Separator",
            description: "Filter name separator.",
            type: ArgType.String,
            required: false,
            rest: false
        }
    ],
    output: ArgType.String,
    async execute(ctx, [separator]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        if (!ctx.client.music.manager.plugins.has(PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }

        return this.success(player.filters.join(separator ?? ","))
    }
})