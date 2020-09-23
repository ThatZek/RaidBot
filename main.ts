import { Client } from "./services/client";
import { CommandHandler } from "./services/CommandHandler";

const client = Client.getInstance().getClient();
const commandHandler = CommandHandler.getInstance();
const prefix = ';';

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
    commandHandler.populateCommands();
})

client.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
    commandHandler.process(command, msg, args);
});

client.login(process.env.BOT_TOKEN);