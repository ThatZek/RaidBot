const Discord = require("discord.js");
const config = require("../../config.json");
module.exports.run = async (client, msg, args) => {
    console.log(args);
    client.db.args[0].sync({force: true});
    msg.reply(`Force Synced ${args[0]}`);
}
module.exports.properties = {
    name: "forcesync",
    enabled: true,
    permissionRank: 100,
    commandLevel: "bot",
    botPermissions: [

    ],
    userPermissions: [
        
    ],
}