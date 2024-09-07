"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceCommandManager = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const ErisaVoice_1 = require("./ErisaVoice");
class VoiceCommandManager extends forgescript_1.BaseCommandManager {
    constructor() {
        super(...arguments);
        this.handlerName = ErisaVoice_1.HANDLER_NAME;
    }
}
exports.VoiceCommandManager = VoiceCommandManager;
