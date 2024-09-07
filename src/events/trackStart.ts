import { VoiceEventHandler } from "../classes/VoiceEventHandler"
import { Interpreter } from "@tryforge/forgescript"
import { ErisaVoice } from "../classes/ErisaVoice"
import { PlayerEvents } from "@aoijs/aoi.music"

export default new VoiceEventHandler({
    name: PlayerEvents.TrackStart,
    description: "Emitted and executed when a track starts playing.",
    listener(track, player) {
        const commands = this.getExtension(ErisaVoice, true).commands.get(
            PlayerEvents.TrackStart,
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
                    track,
                    player,
                },
            });
        }
    },
});
