const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports.run = async(client, msg, args) => {
    const member = msg.mentions.members.first();
    const discordUser = member.user;
    const username = args[1].toLowerCase();
    const keyValue = randomStr(25,'1234567890qwertyuiopasdfghjklzxcvbnm');
    const productkeys  = client.db.get('productkeys');
    try {
        const key = await users.create({
            productKey: keyValue,
            serverID: null,
            redeemed: 'false',
            userID: null,
            generatedBy: discordUser.id,
        });
        return msg.reply(`Generated key ${keyValue}`);
    }
    catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            return msg.reply('That key already exists.');
        }
        return msg.reply('Something went wrong with adding a product key.');
    }
}

module.exports.properties = {
    name: "generatekey",
    enabled: true,
    permissionRank: 100,
    commandLevel: "bot",
    botPermissions: [

    ],
    userPermissions: [
        
    ]
}

function randomStr(len, arr) { 
    let ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans +=  
          arr[Math.floor(Math.random() * arr.length)]; 
    } 
    return ans; 
} 