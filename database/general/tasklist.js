const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');
const database = require('../database.js')

module.exports = database.define('tasklist', {
    task: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true,
    },
    serverID: Sequelize.STRING,
    userID: Sequelize.STRING,
})

module.exports.properties = {
    name: "tasklist",
    enabled: true
}