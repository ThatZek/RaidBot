const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');
const database = require('../database.js')

module.exports = database.define('users', {
    discordID: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true,
    },
    username: Sequelize.STRING,
    permissionRank: Sequelize.INTEGER,
})

module.exports.properties = {
    name: "users",
    enabled: true
}