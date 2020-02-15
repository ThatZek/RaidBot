const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports.run = async(client, msg, args) => {
    const member = msg.author;
    const user = member.user;
    const server = msg.guild;
    if(member.id != server.owner.id) return msg.reply('You are not the server owner!');
    const keyCollector = new Discord.MessageCollector(user.id);
    const mainChannel = msg.channel;
    const statusMessage = msg.channel.send('Please DM me your product key.');
    keyCollector.on('collect', msg => {
        const productkeys = client.db.get('productkeys');
        const key = await users.findOne({ where: { productKey: msg.content } });
        keyCollector.stop();
        if(!key) return msg.reply("ERR: INVALID KEY! Please obtain a product key from That \"One\" Turtle.")
        if(key.redeemed = 'true') return msg.reply("ERR: KEY ALREADY REDEEMED! Please message That \"One\" Turtle if this is an error.");
        msg.channel.send('SUCCESS: Now generating necessary files.');
        client.database.newServer(client, server.id, member);
    })
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