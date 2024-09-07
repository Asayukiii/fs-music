import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { PlatformType } from "@aoijs/aoi.music";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.String;
    required: true;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Enum;
    required: true;
    rest: false;
    enum: typeof PlatformType;
}], true>;
export default _default;
