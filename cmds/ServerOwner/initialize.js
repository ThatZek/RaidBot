const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports.run = async(client, msg, args) => {
    const user = msg.mentions.members.first();
}

module.exports.properties = {
    name: "initialize",
    enabled: false,
    permissionRank: 0,
    commandLevel: "server",
    botPermissions: [

    ],
    userPermissions: [

    ],
}