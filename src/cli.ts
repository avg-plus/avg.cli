#!/usr/bin/env node
import program from "commander"
import path from "path"
import child_process from 'child_process'
import fs from 'fs'
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
        child_process.spawn('cp', ['-r', path.resolve(__dirname, '..', 'release'), targetPath])
        console.log(`Creating project '${name}' on current directory ${targetPath}`)
        console.log(`Run cd ${name} && avg-cli run web `)
      })

    program
      .command("platform <add> [platform]")
      .description("Add a platform")
      .action((add, platform, options) => {
        const table: any = {
          win32: 'win-x86.zip',
          darwin: 'darwin.zip',
          linux: 'linux-x86.zip',
          web: 'web.zip'
        }
        const bundlesDir = 'platform-bundles';
        if (platform === 'desktop') {
          const bundleSrc = path.resolve(process.cwd(), bundlesDir, table[process.platform])
          if (fs.existsSync(bundleSrc)) {
            console.log('Desktop bundles aready been installed.')
          } else {
            console.log('fetching bundles..')
            child_process.spawn('cp', ['-r', path.resolve(__dirname, '..', bundlesDir, table[process.platform]), path.resolve(process.cwd(), bundlesDir)])
          }
        }
      })
    program
      .command("run <platform>")
      .description("Run current project")
      .action((platform, options) => {
        switch (platform) {
          case 'web':
            console.log(path.resolve(process.cwd()))
            liveServer.start()
            console.log(`Run current project '${platform}'`)
            break;
          case 'desktop':
            console.log('desktop')
            break;
          default:
            break;
        }
      })

    program.parse(argv)
  }
}

CLI.init(process.argv)
