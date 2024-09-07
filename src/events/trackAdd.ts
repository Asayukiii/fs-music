import { VoiceEventHandler } from "../classes/VoiceEventHandler"
import { Interpreter } from "@tryforge/forgescript"
import { ErisaVoice } from "../classes/ErisaVoice"
import { PlayerEvents } from "@aoijs/aoi.music"

export default new VoiceEventHandler({
    name: PlayerEvents.TrackAdd,
    description:
        "Emitted and executed when a track is added into the music player.",
    listener(track, player) {
        const commands = this.getExtension(ErisaVoice, true).commands.get(
            PlayerEvents.TrackAdd,
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
