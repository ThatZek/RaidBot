import { Collection } from "discord.js";
import * as fs from 'fs';

export class CommandHandler {
    private static _instance: CommandHandler = new CommandHandler();
    private commands;
    private interval: NodeJS.Timeout | undefined;
    private commandSchedule = new Collection();

    constructor() {
        if (CommandHandler._instance) {
            throw new Error("Error: Instantiation failed: Use CommandHandler.getInstance() instead of new")
        }
        CommandHandler._instance = this;
    }

    public static getInstance(): CommandHandler {
        return CommandHandler._instance;
    }
    public populateCommands() {
        this.commands = new Collection();
        fs.readdir("./commands/", (err, folders) => {
            if (err) throw err;

            for (let i = 0; i < folders.length; i++) {
                fs.readdir(`./commands/${folders[i]}`, (e, files) => {
                    let tsfiles = files.filter(f => f.split(".").pop() === 'ts');
                    if (tsfiles.length < 1) {
                        console.log(`No commands in ${folders[i]}`);
                        return;
                    }

                    tsfiles.forEach((file) => {
                        let splitFile = file.split(".");
                        let properties = require(`../commands/${folders[i]}/${splitFile[0]}`);
                        console.log(`Loaded ${file}`);
                        this.commands.set(properties.help.name, properties);
                    })
                })
            }
        })


    }
    public process(command, msg, args) {
        const cmd = this.commands.get(command);
        if (cmd.help.role) return;
        cmd.run(msg, args);
    }
}