const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports.run = async(client, msg, args) => {
    const member = msg.mentions.members.first();
    const user = member.user;
    const username = args[1].toLowerCase();
    try {
        const user = await client.db.users.create({
            discordID: user.id,
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
    enabled: false,
    permissionRank: 0,
    commandLevel: "bot",
    botPermissions: [

    ],
    userPermissions: [
        
    ]
}