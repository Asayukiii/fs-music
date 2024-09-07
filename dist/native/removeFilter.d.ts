import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { AudioFilters } from "./addFilter";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Enum;
    required: true;
    rest: false;
    enum: typeof AudioFilters;
}], true>;
export default _default;
