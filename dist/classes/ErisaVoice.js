"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ErisaVoice_manager;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErisaVoice = exports.HANDLER_NAME = void 0;
const aoi_music_1 = require("@aoijs/aoi.music");
const forgescript_1 = require("@tryforge/forgescript");
const VoiceCommandManager_1 = require("./VoiceCommandManager");
const option_1 = __importDefault(require("../functions/option"));
/**
 * The name the event handler has.
 */
exports.HANDLER_NAME = "ErisaVoice";
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
class ErisaVoice extends forgescript_1.ForgeExtension {
    /**
     * Starts the music manager.
     */
    constructor(options) {
        super();
        this.options = options;
        this.name = "Erisa Voice";
        this.description = "Voice extension for ForgeScript.";
        this.version = "1.0.0";
        _ErisaVoice_manager.set(this, (0, option_1.default)());
        this.textChannels = new Map;
    }
    /**
     * Starts the extension.
     * @param client - Forge client to attach this extension to.
     */
    init(client) {
        // Utilities.
        client.music = this;
        // Create the command manager.
        this.commands = new VoiceCommandManager_1.VoiceCommandManager(client);
        // Create the audio player manager.
        __classPrivateFieldSet(this, _ErisaVoice_manager, new aoi_music_1.Manager(this.options.manager), "f");
        // Add plugins to the manager, if they exist.
        if (this.options.plugins?.length) {
            for (const plugin of this.options.plugins) {
                __classPrivateFieldGet(this, _ErisaVoice_manager, "f").addPlugin(plugin[0], plugin[1]);
            }
        }
        // Loading events.
        forgescript_1.EventManager.load(exports.HANDLER_NAME, `${__dirname.replace(/classes/g, "events")}`);
        // Loading native functions.
        this.load(__dirname.replace(/classes/g, "native"));
        // Load commands if option was provided.
        if (this.options.commands) {
            this.commands.load(this.options.commands);
        }
        // Load specified events into the Discord client.
        if (this.options.events?.length) {
            client.events.load(exports.HANDLER_NAME, this.options.events);
        }
    }
    /**
     * Joins a voice channel.
     * @returns {Promise<boolean>}
     */
    async joinVc({ type, voiceChannel, selfDeaf, selfMute, adapter, textChannel }) {
        this.textChannels.set(voiceChannel.id, textChannel);
        return await __classPrivateFieldGet(this, _ErisaVoice_manager, "f").joinVc({ type, voiceChannel, selfDeaf, selfMute, adapter });
    }
    /**
     * Returns the voice manager.
     */
    get manager() {
        return __classPrivateFieldGet(this, _ErisaVoice_manager, "f");
    }
    /**
     * Whether system should log errors.
     */
    get logErrors() {
        return this.options.logErrors ?? false;
    }
}
exports.ErisaVoice = ErisaVoice;
_ErisaVoice_manager = new WeakMap();
