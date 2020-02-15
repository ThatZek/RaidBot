const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
})