import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { AutoPlay } from "@aoijs/aoi.music";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Enum;
    required: false;
    rest: false;
    enum: typeof AutoPlay;
}], true>;
export default _default;
