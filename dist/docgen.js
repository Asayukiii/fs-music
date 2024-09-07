"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const ErisaVoice_1 = require("./classes/ErisaVoice");
const path_1 = require("path");
(0, forgescript_1.generateMetadata)((0, path_1.join)(__dirname, "native"), "native", ErisaVoice_1.HANDLER_NAME, true, void 0, (0, path_1.join)(__dirname, "events"))
    .then(() => forgescript_1.Logger.info("Documentation generation done."))
    .catch((e) => forgescript_1.Logger.error(e));
