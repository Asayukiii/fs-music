"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceEventHandler = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const ErisaVoice_1 = require("./ErisaVoice");
/**
 * Represents the voice event handler.
 */
class VoiceEventHandler extends forgescript_1.BaseEventHandler {
    /**
     * Register this event to the client.
     * @param client - Client to attach the event to.
     */
    register(client) {
        client.getExtension(ErisaVoice_1.ErisaVoice, true).manager.on(this.name, this.listener.bind(client));
    }
}
exports.VoiceEventHandler = VoiceEventHandler;
