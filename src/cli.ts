#!/usr/bin/env node
import program from "commander"
import path from "path"
import child_process from 'child_process'
const liveServer = require('live-server')

export default class CLI {
  public static init(argv: string[]) {
    program
      .version("0.1.0")

    program
      .command("create <name>")
      .description("Create an AVGPlus project.")
      .action(async (name, options) => {
        const targetPath = path.resolve(process.cwd(), name);
        child_process.spawn('cp', ['-r', path.resolve(`${__dirname}/../release`), targetPath])
        console.log(`Creating project '${name}' on current directory ${targetPath}`)
        console.log(`Run cd ${name} && avg-cli run web `)
      })

    program
      .command("plantform-add <plantform>")
      .description("Add a plantform")
      .action((plantform, options) => {
        console.log(`Add a plantform '${plantform}'`)
      })
    program
      .command("run <plantform>")
      .description("Run current project")
      .action((plantform, options) => {
        console.log(path.resolve(process.cwd()))
        liveServer.start()
        console.log(`Run current project '${plantform}'`)
      })

    program.parse(argv)
  }
}

CLI.init(process.argv)
