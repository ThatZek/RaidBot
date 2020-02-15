const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');
const config = require('./config.json')
const client = new Discord.Client();

//Collection defining
client.db = new Discord.Collection();
client.database = require('./database/database.js');
client.commands = new Discord.Collection();

//commands
fs.readdir("./cmds/", (err, folders) => {
	if (err) throw err;

	for (let i = 0; i < folders.length; i++) {
		fs.readdir(`./cmds/${folders[i]}`, (e, files) => {
			let jsfiles = files.filter(f => f.split(".").pop() === 'js');
			if (jsfiles.length < 1) {
				console.log(`No commands in ${folders[i]}`);
				return;
			}

			jsfiles.forEach((file) => {
				let command = require(`./cmds/${folders[i]}/${file}`);
				if(!command.properties.enabled) return;
				console.log(`Loaded ${file}`);
				client.commands.set(command.properties.name, command);
			})
		})
	}
})

//database
fs.readdir("./database/", (err, folders) => {
	if (err) throw err;
	for (let i = 0; i < folders.length; i++) {
		fs.readdir(`./database/${folders[i]}`, (e, files) => {
			if(files === undefined) return;
			let jsfiles = files.filter(f => f.split(".").pop() === 'js');
			if (jsfiles.length < 1) {
				console.log(`No models in ${folders[i]}`);
				return;
			}

			jsfiles.forEach((file) => {
				let model = require(`./database/${folders[i]}/${file}`);
				if(!model.properties.enabled) return;
				console.log(`Loaded ${file}`);
				client.db.set(model.properties.name, model);
				client.database.sync();
			})
		})
	}
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Ping bot for help', {type: "PLAYING"});
	client.db.sync();
})

client.on('message', msg => {
	if(msg.author.bot) return;
	const prefix = config.prefix;
    const args = msg.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
    if (msg.content.startsWith(config.prefix)) {
    const cmd = client.commands.get(command);
    if (cmd) {
            return cmd.run(client, msg, args);
        }
    }
})

client.login(config.TOKEN);