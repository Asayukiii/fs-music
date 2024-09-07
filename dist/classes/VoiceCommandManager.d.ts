import { BaseCommandManager } from "@tryforge/forgescript";
import { PlayerEvents } from "@aoijs/aoi.music";
export declare class VoiceCommandManager extends BaseCommandManager<`${PlayerEvents}`> {
    handlerName: string;
}
