import { ErisaVoice, ErisaVoiceOptions, ErisaPlugin } from "./classes/ErisaVoice";
import { ErisaVoiceEvents, VoiceEventHandler } from "./classes/VoiceEventHandler";
import { Cacher, Filter, LoopMode, PluginName, PlayerEvents } from "@aoijs/aoi.music";
import { VoiceCommandManager } from "./classes/VoiceCommandManager";
import { AudioPlayerType } from "./native/joinVoiceChannel";
import { AudioFilters } from "./native/addFilter";
import { AoiFilter } from "./native/addFilter";
export { AoiFilter, AudioFilters, AudioPlayerType, Cacher, ErisaVoice, ErisaVoiceOptions, ErisaVoiceEvents, ErisaPlugin, Filter, LoopMode, PlayerEvents, PluginName, VoiceCommandManager, VoiceEventHandler };
declare module "@tryforge/forgescript" {
    interface ForgeClient {
        music: ErisaVoice;
    }
}
