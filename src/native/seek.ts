import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { Filter, PluginName } from "@aoijs/aoi.music"

export default new NativeFunction({
    name: "$seek",
    description: "Seeks the position of a song.",
    unwrap: true,
    version: "1.0.0",
    args: [
        {
            name: "Time",
            description: "Time to be seeked.",
            type: ArgType.Number,
            required: true,
            rest: false
        }
    ],
    async execute(ctx, [time]) {
        const player = ctx.client.music.manager.players.get(ctx.guild!.id)
        if (!player) return this.customError("Music player not found.");

        if (!ctx.client.music.manager.plugins.has(PluginName.Filter)) {
            return this.customError("Filter plugin not found.");
        }

        const filter = <Filter>ctx.client.music.manager.plugins.get(PluginName.Filter)
        filter.seek(time, player)

        return this.success()
    }
})