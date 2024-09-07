import { VoiceEventHandler } from "../classes/VoiceEventHandler"
import { Interpreter } from "@tryforge/forgescript"
import { ErisaVoice } from "../classes/ErisaVoice"
import { PlayerEvents } from "@aoijs/aoi.music"

export default new VoiceEventHandler({
    name: PlayerEvents.QueueStart,
    description: "Emitted and executed when the music player queue starts.",
    listener(urls, player) {
        const commands = this.getExtension(ErisaVoice, true).commands.get(
            PlayerEvents.QueueStart,
        );
        if (!commands) return;

        const textChannel = this.getExtension(
            ErisaVoice,
            true,
        ).textChannels.get(player.options.voiceChannel);

        for (const command of commands) {
            Interpreter.run({
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
