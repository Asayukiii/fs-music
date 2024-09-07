import { generateMetadata, Logger } from "@tryforge/forgescript"
import { HANDLER_NAME } from "./classes/ErisaVoice"
import { join } from "path"

generateMetadata(
    join(__dirname, "native"),
    "native",
    HANDLER_NAME,
    true,
    void 0,
    join(__dirname, "events")
)
.then(() => Logger.info("Documentation generation done."))
.catch((e) => Logger.error(e));