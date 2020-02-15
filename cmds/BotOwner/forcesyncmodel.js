const Discord = require("discord.js");
const config = require("../../config.json");
module.exports.run = async (client, msg, args) => {
    console.log(args);
    const toSync = client.db.get(args[0]);
    toSync.sync({force: true});
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