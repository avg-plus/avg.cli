import program from "commander";

export default class CLI {
  public static init(argv: string[]) {
    program
      .version("0.1.0")
      .command("create <name>")
      .description("Create an AVGPlus project.")
      .action((name, options) => {
        console.log("Creating project on current directory ...");
      });

    // More commands here
    // ...

    program.parse(argv);
  }
}

CLI.init(process.argv);
