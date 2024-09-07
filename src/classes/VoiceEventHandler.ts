import { BaseEventHandler, ForgeClient } from "@tryforge/forgescript"
import { ManagerEvents, PlayerEvents } from "@aoijs/aoi.music"
import { ErisaVoice } from "./ErisaVoice"

/**
 * All resolved events the audio player has.
 */
export type ErisaVoiceEvents = {
    [P in PlayerEvents]: Parameters<ManagerEvents[P]>
}

/**
 * Represents the voice event handler.
 */
export class VoiceEventHandler<Events extends ErisaVoiceEvents = ErisaVoiceEvents, Names extends keyof Events = keyof Events> extends BaseEventHandler<Events, Names> {
    /**
     * Register this event to the client.
     * @param client - Client to attach the event to.
     */
    public register(client: ForgeClient) {
        client.getExtension(ErisaVoice, true).manager.on(<keyof ManagerEvents>this.name, this.listener.bind(client) as any)
    }
}