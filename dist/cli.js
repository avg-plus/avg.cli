"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
class CLI {
    static init(argv) {
        commander_1.default
            .version("0.1.0")
            .command("create <name>")
            .description("Create an AVGPlus project.")
            .action((name, options) => {
            console.log("Creating project on current directory ...");
        });
        // More commands here
        // ...
        commander_1.default.parse(argv);
    }
}
exports.default = CLI;
CLI.init(process.argv);
