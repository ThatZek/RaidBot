const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');
const database = require('../database.js')

module.exports = database.define('productkeys', {
    productKey: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true,
    },
    serverID: Sequelize.STRING,
    redeemed: Sequelize.STRING,
    userID: Sequelize.STRING,
    generatedBy: Sequelize.STRING,
})

module.exports.properties = {
    name: "productkeys",
    enabled: true
}