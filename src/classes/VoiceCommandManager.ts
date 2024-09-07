import { BaseCommandManager } from "@tryforge/forgescript"
import { PlayerEvents } from "@aoijs/aoi.music"
import { HANDLER_NAME } from "./ErisaVoice"

export class VoiceCommandManager extends BaseCommandManager<`${PlayerEvents}`> {
    public handlerName = HANDLER_NAME
}