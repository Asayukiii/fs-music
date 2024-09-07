"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasPlayer",
    description: "Returns whether the current guild has a music player created.",
    version: "1.0.0",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(ctx.client.music.manager.players.has(ctx.guild.id));
    }
});
