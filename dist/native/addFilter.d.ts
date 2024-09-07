import { ArgType, NativeFunction } from "@tryforge/forgescript";
/**
 * Represents a music player filter.
 */
export interface AoiFilter {
    filter: string;
    value: string;
}
/**
 * List of supported audio filters.
 */
export declare enum AudioFilters {
    NightCore = "nightCore",
    BassBoost = "bassBoost",
    EightD = "8D",
    Pitch = "pitch",
    Karaoke = "karaoke",
    Slowed = "slowed",
    Deep = "deep",
    TrebleBoost = "trebleBoost",
    Gate = "gate",
    Vibrato = "vibrato",
    Flanger = "flanger",
    Phaser = "phaser"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Enum;
    required: true;
    rest: false;
    enum: typeof AudioFilters;
}, {
    name: string;
    description: string;
    type: ArgType.Number;
    required: true;
    rest: false;
}], true>;
export default _default;
