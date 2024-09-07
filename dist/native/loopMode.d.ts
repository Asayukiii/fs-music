import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LoopMode } from "@aoijs/aoi.music";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Enum;
    required: true;
    rest: false;
    enum: typeof LoopMode;
}], true>;
export default _default;
