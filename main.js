const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

const client = new Discord.Client();

//Collection defining
client.db = new Discord.Collection();
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
				let properties = require(`./cmds/${folders[i]}/${file}`);
				if(!properties.enabled) return;
				console.log(`Loaded ${file}`);
				client.commands.set(properties.help.name, properties);
			})
		})
	}
})

//database
fs.readdir("./database/", (err, folders) => {
	if (err) throw err;

	for (let i = 0; i < folders.length; i++) {
		if(folders[i] = 'servers') {
				fs.readdir("./database/servers", (err, servers) => {
					for (let i = 0; i < servers.length; i++) {
						fs.readdir(`./database/servers/${servers[i]}`, (err, files) => {
							let jsfiles = files.filter(f => f.split(".").pop() === 'js');
							if (jsfiles.length < 1) {
							console.log(`No datamaps in ${folders[i]}`);
							return;
							}

							jsfiles.forEach((file) => {
							let properties = require(`./database/${folders[i]}/${file}`);
							if(!properties.enabled) return;
							console.log(`Loaded ${file}`);
							client.db.set(properties.name, properties);
			})
						}) 
					}
				})
		}else {
		fs.readdir(`./database/${folders[i]}`, (e, files) => {
			let jsfiles = files.filter(f => f.split(".").pop() === 'js');
			if (jsfiles.length < 1) {
				console.log(`No datamaps in ${folders[i]}`);
				return;
			}

			jsfiles.forEach((file) => {
				let properties = require(`./database/${folders[i]}/${file}`);
				if(!properties.enabled) return;
				console.log(`Loaded ${file}`);
				client.db.set(properties.name, properties);
			})
		})
	}
	}
})

client.login('');