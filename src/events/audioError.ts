import { VoiceEventHandler } from "../classes/VoiceEventHandler"
import { Interpreter } from "@tryforge/forgescript"
import { ErisaVoice } from "../classes/ErisaVoice"
import { PlayerEvents } from "@aoijs/aoi.music"

export default new VoiceEventHandler({
    name: PlayerEvents.AudioError,
    description: "Emitted and executed when audio throws an error.",
    listener(error, player) {
        const commands = this.getExtension(ErisaVoice, true).commands.get(
            PlayerEvents.AudioError,
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
                environment: {
                    error,
                    player,
                },
                data: command.compiled.code,
            });
        }
    },
});
