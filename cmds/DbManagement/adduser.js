const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports.run = async(client, msg, args) => {
    const member = msg.mentions.members.first();
    const discordUser = member.user;
    const username = args[1].toLowerCase();
    const users = client.db.get('users');
    try {
        const user = await users.create({
            discordID: discordUser.id,
            permissionRank: 0,
            username: username,
        });
        return msg.reply(`User ${member.nickname} added.`);
    }
    catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            return msg.reply('That user already exists.');
        }
        return msg.reply('Something went wrong with adding a user.');
    }
}

module.exports.properties = {
    name: "adduser",
    enabled: true,
    permissionRank: 100,
    commandLevel: "bot",
    botPermissions: [

    ],
    userPermissions: [
        
    ]
}