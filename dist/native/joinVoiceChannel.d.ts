import { BaseChannel, VoiceBasedChannel } from "discord.js";
import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum AudioPlayerType {
    Bidirectional = "bidirectional",
    Default = "default",
    FOnly = "fonly"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Channel;
    check: (c: BaseChannel) => c is VoiceBasedChannel;
    required: true;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Channel;
    check: (c: BaseChannel) => c is import("discord.js").DMChannel | import("discord.js").PartialGroupDMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").PrivateThreadChannel | import("discord.js").VoiceChannel;
    required: false;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Boolean;
    required: false;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Boolean;
    required: false;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Boolean;
    required: false;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Enum;
    required: false;
    rest: false;
    enum: typeof AudioPlayerType;
}], true>;
export default _default;
