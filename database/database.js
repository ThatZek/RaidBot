const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
})

module.exports.newServer = async(client, serverID, serverOwner) => {
    client.guilds.get(serverID).then(server => {
        const serverName = server.name;
        fs.mkdirSync(`../servers/${serverID}`);
        fs.mkdirSync(`../servers/${serverID}/modules`)
        fs.writeFileSync(`../servers/${serverID}/serverDB.js`,
         `const Discord = require("discord.js");
         const fs = require('fs');
         const Sequelize = require('sequelize');
         
         module.exports = new Sequelize({
             dialect: 'sqlite',
             logging: false,
             storage: '../servers/${serverID}/serverDB.sqlite',
         })`
        );
        fs.writeFileSync(`../servers/${serverID}/users.js`)
    })
}