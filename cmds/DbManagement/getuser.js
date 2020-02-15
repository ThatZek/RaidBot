const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports.run = async(client, msg, args) => {
    const member = msg.mentions.members.first();
    const discordUser = member.user;
    const username = args[1].toLowerCase();
    const users = client.db.get('users');
}

module.exports.properties = {
    name: "getuser",
    enabled: false,
    permissionRank: 100,
    commandLevel: "bot",
    botPermissions: [

    ],
    userPermissions: [
        
    ]
}