import { BaseEventHandler, ForgeClient } from "@tryforge/forgescript";
import { ManagerEvents, PlayerEvents } from "@aoijs/aoi.music";
/**
 * All resolved events the audio player has.
 */
export type ErisaVoiceEvents = {
    [P in PlayerEvents]: Parameters<ManagerEvents[P]>;
};
/**
 * Represents the voice event handler.
 */
export declare class VoiceEventHandler<Events extends ErisaVoiceEvents = ErisaVoiceEvents, Names extends keyof Events = keyof Events> extends BaseEventHandler<Events, Names> {
    /**
     * Register this event to the client.
     * @param client - Client to attach the event to.
     */
    register(client: ForgeClient): void;
}
