"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VoiceEventHandler_1 = require("../classes/VoiceEventHandler");
const forgescript_1 = require("@tryforge/forgescript");
const ErisaVoice_1 = require("../classes/ErisaVoice");
const aoi_music_1 = require("@aoijs/aoi.music");
exports.default = new VoiceEventHandler_1.VoiceEventHandler({
    name: aoi_music_1.PlayerEvents.QueueStart,
    description: "Emitted and executed when the music player queue starts.",
    listener(urls, player) {
        const commands = this.getExtension(ErisaVoice_1.ErisaVoice, true).commands.get(aoi_music_1.PlayerEvents.QueueStart);
        if (!commands)
            return;
        const textChannel = this.getExtension(ErisaVoice_1.ErisaVoice, true).textChannels.get(player.options.voiceChannel);
        for (const command of commands) {
            forgescript_1.Interpreter.run({
                obj: textChannel,
                client: this,
                command,
                data: command.compiled.code,
                environment: {
                    urls,
                    player,
                },
            });
        }
    },
});
