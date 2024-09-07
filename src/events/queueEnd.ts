import { VoiceEventHandler } from "../classes/VoiceEventHandler"
import { Interpreter } from "@tryforge/forgescript"
import { ErisaVoice } from "../classes/ErisaVoice"
import { PlayerEvents } from "@aoijs/aoi.music"

export default new VoiceEventHandler({
    name: PlayerEvents.QueueEnd,
    description: "Emitted and executed when the music player queue ends.",
    listener(player) {
        const commands = this.getExtension(ErisaVoice, true).commands.get(
            PlayerEvents.QueueEnd,
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
                    player,
                },
            });
        }
    },
});
