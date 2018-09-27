#!/usr/bin/env node

import program from "commander";
export default class CLI {
  public static init(argv: string[]) {
    program
      .version("0.1.0")
      console.log('11111')
    program
      .command("create <name>")
      .description("Create an AVGPlus project.")
      .action((name, options) => {
        console.log(`Creating project '${name}' on current directory ${__dirname}`);
      });

    // More commands here
    // ...

    program.parse(argv)
  }
}

CLI.init(process.argv)
