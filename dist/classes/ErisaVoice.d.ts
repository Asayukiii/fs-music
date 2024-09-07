import { AudioPLayerOptions, Cacher, Filter, Manager, ManagerConfigurations, PlayerEvents, PluginName } from "@aoijs/aoi.music";
import { ForgeClient, ForgeExtension } from "@tryforge/forgescript";
import { GuildTextBasedChannel, Snowflake, VoiceBasedChannel } from "discord.js";
import { VoiceCommandManager } from "./VoiceCommandManager";
/**
 * Represents a manager plugin.
 */
export type ErisaPlugin = [PluginName, Cacher<"memory" | "disk"> | Filter];
/**
 * All options this extension has.
 */
export interface ErisaVoiceOptions {
    /**
     * Command path to load voice commands from.
     */
    commands?: string;
    events?: Array<`${PlayerEvents}`>;
    logErrors?: boolean;
    manager?: ManagerConfigurations;
    plugins?: ErisaPlugin[];
}
/**
 * The name the event handler has.
 */
export declare const HANDLER_NAME = "ErisaVoice";
/**
 * Extension that adds music capabilities to your Discord client.
 * @example
 * const voice = new ErisaVoice();
 *
 * new ForgeClient({
 *     extensions: [
 *         voice
 *     ]
 * });
 */
export declare class ErisaVoice extends ForgeExtension {
    #private;
    readonly options: ErisaVoiceOptions;
    name: string;
    description: string;
    version: string;
    commands: VoiceCommandManager;
    textChannels: Map<Snowflake, GuildTextBasedChannel>;
    /**
     * Starts the music manager.
     */
    constructor(options: ErisaVoiceOptions);
    /**
     * Starts the extension.
     * @param client - Forge client to attach this extension to.
     */
    init(client: ForgeClient): void;
    /**
     * Joins a voice channel.
     * @returns {Promise<boolean>}
     */
    joinVc({ type, voiceChannel, selfDeaf, selfMute, adapter, textChannel }: {
        type: AudioPLayerOptions["type"];
        voiceChannel: VoiceBasedChannel;
        textChannel: GuildTextBasedChannel;
        selfDeaf?: boolean;
        selfMute?: boolean;
        adapter?: any;
    }): Promise<boolean>;
    /**
     * Returns the voice manager.
     */
    get manager(): Manager;
    /**
     * Whether system should log errors.
     */
    get logErrors(): boolean;
}
