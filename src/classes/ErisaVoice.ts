import { AudioPLayerOptions, Cacher, Filter, Manager, ManagerConfigurations, PlayerEvents, PluginName } from "@aoijs/aoi.music"
import { EventManager, ForgeClient, ForgeExtension } from "@tryforge/forgescript"
import { GuildTextBasedChannel, Snowflake, VoiceBasedChannel } from "discord.js"
import { VoiceCommandManager } from "./VoiceCommandManager"
import option from "../functions/option"

/**
 * Represents a manager plugin.
 */
export type ErisaPlugin = [PluginName, Cacher<"memory" | "disk"> | Filter]

/**
 * All options this extension has.
 */
export interface ErisaVoiceOptions {
    /**
     * Command path to load voice commands from.
     */
    commands?: string
    events?: Array<`${PlayerEvents}`>
    logErrors?: boolean
    manager?: ManagerConfigurations
    plugins?: ErisaPlugin[]
}

/**
 * The name the event handler has.
 */
export const HANDLER_NAME = "ErisaVoice"

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
export class ErisaVoice extends ForgeExtension {
    name = "Erisa Voice"
    description = "Voice extension for ForgeScript."
    version = "1.0.0"

    #manager = option<Manager>()
    public commands!: VoiceCommandManager
    public textChannels: Map<Snowflake, GuildTextBasedChannel> = new Map

    /**
     * Starts the music manager.
     */
    constructor(public readonly options: ErisaVoiceOptions) {
        super()
    }

    /**
     * Starts the extension.
     * @param client - Forge client to attach this extension to.
     */
    public init(client: ForgeClient) {
        // Utilities.
        client.music = this
        
        // Create the command manager.
        this.commands = new VoiceCommandManager(client)

        // Create the audio player manager.
        this.#manager = new Manager(this.options.manager)

        // Add plugins to the manager, if they exist.
        if (this.options.plugins?.length) {
            for (const plugin of this.options.plugins) {
                this.#manager.addPlugin(plugin[0], plugin[1])
            }
        }

        // Loading events.
        EventManager.load(HANDLER_NAME, `${__dirname.replace(/classes/g, "events")}`)

        // Loading native functions.
        this.load(__dirname.replace(/classes/g, "native"))

        // Load commands if option was provided.
        if (this.options.commands) {
            this.commands.load(this.options.commands)
        }

        // Load specified events into the Discord client.
        if (this.options.events?.length) {
            client.events.load(HANDLER_NAME, this.options.events)
        }
    }

    /**
     * Joins a voice channel.
     * @returns {Promise<boolean>}
     */
    public async joinVc({ type, voiceChannel, selfDeaf, selfMute, adapter, textChannel }: {
        type: AudioPLayerOptions["type"];
        voiceChannel: VoiceBasedChannel;
        textChannel: GuildTextBasedChannel;
        selfDeaf?: boolean;
        selfMute?: boolean;
        adapter?: any;
    }) {
        this.textChannels.set(voiceChannel.id, textChannel)
        
        return await this.#manager.joinVc({ type, voiceChannel, selfDeaf, selfMute, adapter })
    }

    /**
     * Returns the voice manager.
     */
    get manager() {
        return this.#manager
    }

    /**
     * Whether system should log errors.
     */
    get logErrors() {
        return this.options.logErrors ?? false
    }
}